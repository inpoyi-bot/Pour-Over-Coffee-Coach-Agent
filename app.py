"""邀请制网页入口：访问码 → 访客身份 → 这位访客的 ADK 会话。

启动：./.venv/bin/uvicorn app:app --host 127.0.0.1 --port 8000
必填环境变量（真实值只放本机或托管平台）：
  COFFEE_ACCESS_CODE: 至少 16 个字符的共享访问码。
  COFFEE_COOKIE_SECRET: 至少 32 个字符的 Cookie 签名密钥。
  DATABASE_URL: 线上用 Neon pooled PostgreSQL URL。
  SESSION_SERVICE_URI: 本地验证时可代替 DATABASE_URL，使用文件型 SQLite。
  GOOGLE_SERVICE_ACCOUNT_JSON: 线上 Google 服务账号 JSON，通过平台 Secret 注入。
线上还需配置 GOOGLE_GENAI_USE_VERTEXAI、GOOGLE_CLOUD_PROJECT 和 GOOGLE_CLOUD_LOCATION。
本文件不保存凭证。
"""

import hashlib
import hmac
import json
import logging
import os
import re
import time
from contextlib import asynccontextmanager, contextmanager
from pathlib import Path
from tempfile import TemporaryDirectory
from typing import Annotated, Literal
from uuid import uuid4

from fastapi import APIRouter, Depends, FastAPI, HTTPException, Request, Response
from fastapi.responses import JSONResponse
from google.adk.errors.already_exists_error import AlreadyExistsError
from google.adk.runners import Runner
from google.adk.sessions import DatabaseSessionService
from google.genai import types
from pydantic import BaseModel, ConfigDict, Field
from sqlalchemy.engine import make_url
from sqlalchemy.exc import ArgumentError
from sqlalchemy.exc import IntegrityError

APP_NAME = "hello_agent"
COOKIE_NAME = "coffee_guest"
COOKIE_LIFETIME = 30 * 24 * 60 * 60
ID_PATTERN = r"^[A-Za-z0-9_-]{1,96}$"
logger = logging.getLogger(__name__)


@contextmanager
def google_credentials_from_environment():
    """把云端 Secret 适配为 Google SDK 的凭证文件；不进入源码或构建产物。"""
    raw = os.environ.get("GOOGLE_SERVICE_ACCOUNT_JSON")
    if not raw:
        if os.environ.get("VERCEL"):
            raise RuntimeError("Configure GOOGLE_SERVICE_ACCOUNT_JSON as a server-only Secret.")
        yield
        return

    from google.oauth2.service_account import Credentials

    try:
        info = json.loads(raw)
        if not isinstance(info, dict) or info.get("type") != "service_account":
            raise ValueError("Expected service account credentials.")
        Credentials.from_service_account_info(info)
    except (ValueError, TypeError, KeyError):
        raise RuntimeError("Configure valid GOOGLE_SERVICE_ACCOUNT_JSON credentials.") from None

    previous = os.environ.get("GOOGLE_APPLICATION_CREDENTIALS")
    with TemporaryDirectory(prefix="coffee-google-") as folder:
        path = Path(folder) / "credentials.json"
        descriptor = os.open(path, os.O_WRONLY | os.O_CREAT | os.O_EXCL, 0o600)
        with os.fdopen(descriptor, "w") as file:
            json.dump(info, file)
        os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = str(path)
        try:
            yield
        finally:
            if previous is None:
                os.environ.pop("GOOGLE_APPLICATION_CREDENTIALS", None)
            else:
                os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = previous


@asynccontextmanager
async def lifespan(app: FastAPI):
    """只在进程启动时建连接；每杯的 bag/cups 由数据库持久化。"""
    access_code = os.environ.get("COFFEE_ACCESS_CODE", "")
    cookie_secret = os.environ.get("COFFEE_COOKIE_SECRET", "")
    if not 16 <= len(access_code) <= 256 or len(cookie_secret) < 32:
        raise RuntimeError(
            "Configure COFFEE_ACCESS_CODE (16–256) and COFFEE_COOKIE_SECRET (32+)."
        )

    db_url = os.environ.get("DATABASE_URL") or os.environ.get("SESSION_SERVICE_URI", "")
    # Neon 给出标准 PostgreSQL URL；psycopg 是 ADK/SQLAlchemy 使用的驱动。
    if db_url.startswith(("postgres://", "postgresql://")):
        db_url = "postgresql+psycopg://" + db_url.split("://", 1)[1]
    try:
        db_location = make_url(db_url)
    except ArgumentError:
        raise RuntimeError("Configure DATABASE_URL or a local SESSION_SERVICE_URI.") from None
    is_postgres = db_location.drivername == "postgresql+psycopg"
    is_local_sqlite = (
        db_location.drivername == "sqlite+aiosqlite"
        and bool(db_location.database)
        and ":memory:" not in db_location.database
        and db_location.query.get("mode") != "memory"
    )
    if not is_postgres and not (is_local_sqlite and not os.environ.get("VERCEL")):
        raise RuntimeError("Use a PostgreSQL DATABASE_URL; file SQLite is allowed only locally.")

    # 本地复用既有 .env；Vercel 只读取平台注入的后端环境变量。
    if not os.environ.get("VERCEL"):
        from dotenv import load_dotenv

        load_dotenv(Path(__file__).parent / "agents/hello_agent/.env")
    with google_credentials_from_environment():
        from agents.hello_agent.agent import root_agent

        db_options = (
            {"pool_size": 2, "max_overflow": 0, "pool_pre_ping": True}
            if is_postgres else {}
        )
        sessions = DatabaseSessionService(db_url=db_url, **db_options)
        runner = Runner(app_name=APP_NAME, agent=root_agent, session_service=sessions)
        app.state.sessions = sessions
        app.state.runner = runner
        app.state.access_code_hash = hashlib.sha256(access_code.encode()).digest()
        # 访问码或签名密钥轮换后，旧 Cookie 都会失效。
        app.state.cookie_key = hmac.digest(cookie_secret.encode(), access_code.encode(), "sha256")
        app.state.secure_cookie = bool(os.environ.get("VERCEL"))
        try:
            yield
        finally:
            try:
                await runner.close()
            finally:
                await sessions.close()


app = FastAPI(lifespan=lifespan, docs_url=None, redoc_url=None, openapi_url=None)
api = APIRouter(prefix="/api")


@app.middleware("http")
async def browser_boundary(request: Request, call_next):
    """同源 JSON 请求才可写入；会话和登录结果不进入 CDN 缓存。"""
    if request.method == "POST":
        origin = request.headers.get("origin")
        if origin and origin != str(request.base_url).rstrip("/"):
            return JSONResponse({"detail": "Same-origin requests required."}, status_code=403)
        if request.headers.get("content-type", "").split(";", 1)[0] != "application/json":
            return JSONResponse({"detail": "JSON requests required."}, status_code=415)
    response = await call_next(request)
    response.headers["Cache-Control"] = "no-store"
    return response


def read_identity(request: Request) -> str | None:
    """签名证明 Cookie 由服务端签发；客户端不能改 user ID 或到期时间。"""
    token = request.cookies.get(COOKIE_NAME, "")
    if len(token) > 256:
        return None
    try:
        user_id, expires, signature = token.split(".")
        payload = f"{user_id}.{expires}"
        expected = hmac.new(request.app.state.cookie_key, payload.encode(), "sha256").hexdigest()
        valid = hmac.compare_digest(signature.encode(), expected.encode())
        if valid and re.fullmatch(ID_PATTERN, user_id) and int(expires) > time.time():
            return user_id
    except (ValueError, UnicodeError):
        pass
    return None


def require_identity(request: Request) -> str:
    user_id = read_identity(request)
    if user_id is None:
        raise HTTPException(401, "Enter your access code to continue.")
    return user_id


def check_owner(user_id: str, owner: str, session_id: str):
    if user_id != owner:
        raise HTTPException(403, "This session belongs to another visitor.")
    if not re.fullmatch(ID_PATTERN, session_id):
        raise HTTPException(422, "Invalid session ID.")


# 以下字段沿用前端现有 ADK 传输协议，认得即可；诊断输入仍是自然语言。
class JsonBody(BaseModel):
    model_config = ConfigDict(extra="forbid")


class LoginBody(JsonBody):
    access_code: str = Field(min_length=1, max_length=256)


class SessionBody(JsonBody):
    state: dict = Field(default_factory=dict)


class TextPart(JsonBody):
    text: str = Field(min_length=1, max_length=4000)


class UserMessage(JsonBody):
    role: Literal["user"]
    parts: list[TextPart] = Field(min_length=1, max_length=1)


class TurnBody(JsonBody):
    appName: Literal["hello_agent"]
    userId: str = Field(pattern=ID_PATTERN)
    sessionId: str = Field(pattern=ID_PATTERN)
    newMessage: UserMessage


Visitor = Annotated[str, Depends(require_identity)]


@api.get("/health")
async def health():
    return {"status": "ok"}


@api.post("/auth/login")
async def login(body: LoginBody, request: Request, response: Response):
    supplied_hash = hashlib.sha256(body.access_code.encode()).digest()
    if not hmac.compare_digest(supplied_hash, request.app.state.access_code_hash):
        raise HTTPException(401, "Invalid access code.")
    user_id = read_identity(request) or f"guest-{uuid4().hex}"
    payload = f"{user_id}.{int(time.time()) + COOKIE_LIFETIME}"
    signature = hmac.new(request.app.state.cookie_key, payload.encode(), "sha256").hexdigest()
    response.set_cookie(
        COOKIE_NAME, f"{payload}.{signature}", max_age=COOKIE_LIFETIME,
        httponly=True, secure=request.app.state.secure_cookie,
        samesite="lax", path="/api",
    )
    return {"userId": user_id}


@api.get("/auth/me")
async def who_am_i(owner: Visitor):
    return {"userId": owner}


@api.post("/auth/logout")
async def logout(response: Response):
    response.delete_cookie(COOKIE_NAME, path="/api")
    return {"ok": True}


SESSION_PATH = "/apps/hello_agent/users/{user_id}/sessions/{session_id}"


@api.post(SESSION_PATH, status_code=201)
async def create_session(
    user_id: str, session_id: str, body: SessionBody, request: Request, owner: Visitor,
):
    check_owner(user_id, owner, session_id)
    if body.state:
        raise HTTPException(400, "Initial state is owned by the agent.")
    try:
        return await request.app.state.sessions.create_session(
            app_name=APP_NAME, user_id=owner, session_id=session_id,
        )
    except (AlreadyExistsError, IntegrityError):
        raise HTTPException(409, "Session already exists.") from None


@api.get(SESSION_PATH)
async def get_session(user_id: str, session_id: str, request: Request, owner: Visitor):
    check_owner(user_id, owner, session_id)
    session = await request.app.state.sessions.get_session(
        app_name=APP_NAME, user_id=owner, session_id=session_id,
    )
    if session is None:
        raise HTTPException(404, "Session not found.")
    return session


@api.post("/run")
async def run_turn(body: TurnBody, request: Request, owner: Visitor):
    check_owner(body.userId, owner, body.sessionId)
    await get_session(owner, body.sessionId, request, owner)
    message = types.Content(role="user", parts=[types.Part(text=body.newMessage.parts[0].text)])
    try:
        # Runner 继续使用原有工具和数据库；SPEC §3 的推理与落账逻辑保持原样。
        return [
            event.model_dump(mode="json", by_alias=True, exclude_none=True)
            async for event in request.app.state.runner.run_async(
                user_id=owner, session_id=body.sessionId, new_message=message,
            )
        ]
    except Exception as error:
        logger.error("Agent turn failed (%s).", type(error).__name__)
        raise HTTPException(
            502, "The agent could not finish this turn. Please reconnect to your session."
        ) from None


app.include_router(api)
