# 受邀试用部署：Vercel + Neon

更新：2026-10-23。正式入口：<https://drip-coffee-maker.vercel.app/>。

前端和 FastAPI 后端均部署在 Vercel，通过同域 `/api` 通信；ADK 会话保存在 Neon PostgreSQL。日常试用不再依赖作者电脑、ADK 本地进程或 Cloudflare Tunnel 在线。

这是 V60、只调研磨的有限邀请试用，保持 SPEC §3 的跨杯收敛回路；上线不代表诊断质量、成本或可用性的生产级保证。早期 Tunnel 路径的验证保留在 `docs/START-TEST.md` 和历史 handoff 中，不再作为当前部署步骤。

## 发给受邀者

1. 分享正式入口。
2. 从本机被 Git 忽略的 `.env.invitation-codes` 读取 `COFFEE_PRODUCTION_ACCESS_CODE` 等号右侧的值，通过你选择的私密渠道单独提供。不要分享整个文件、预览访问码或任何云服务凭证。
3. 受邀者输入访问码即可开始，不需要 Vercel、Neon 或 Google 账号。

访问码只发送到本项目后端验证，不写入前端存储。后端签发 Secure、HttpOnly、SameSite=Lax Cookie；每位访客有自己的会话身份，不能通过替换 user ID 读取他人会话。

## 配置位置

Vercel 项目：`drip-coffee-maker`。

**Project Root Directory 必须留空，即仓库根目录。** 根目录 `vercel.json` 分别定义 `frontend` 和 `backend` Services。不能再把 Project Root Directory 设为 `frontend`；代码分支没有该目录时会出现原始的 Root Directory 报错，有该目录时也会绕过根部的完整服务配置。

| 层 | 当前配置 |
| --- | --- |
| 前端 | `frontend/` 下的 pnpm workspace，构建 `@workspace/coffee-coach` |
| 前端 API 地址 | build command 显式设置 `VITE_API_BASE_URL=/api` |
| 后端 | 仓库根目录 `app.py`，入口 `app:app` |
| 会话库 | Neon pooled PostgreSQL URL，由 `DATABASE_URL` 注入 |
| 模型 | 原有 Google Vertex AI 配置，后端调用 Gemini |
| 网页身份 | 共享访问码 + 签名访客 Cookie |

后端仅使用 Vercel 的服务端环境变量。真实值不写入源码、构建产物或本文档。

| 环境变量 | 类型 |
| --- | --- |
| `COFFEE_ACCESS_CODE` | Secret，16–256 字符 |
| `COFFEE_COOKIE_SECRET` | Secret，至少 32 字符 |
| `DATABASE_URL` | Secret，Neon pooled 连接串 |
| `GOOGLE_SERVICE_ACCOUNT_JSON` | Secret，现有服务账号 JSON |
| `GOOGLE_GENAI_USE_VERTEXAI` | Config，`true` |
| `GOOGLE_CLOUD_PROJECT` | Config，实际项目 ID |
| `GOOGLE_CLOUD_LOCATION` | Config，实际地区 |

Production 使用独立的正式访问码、Cookie 密钥和 Neon 正式分支。Preview 变量只授予 `codex/vercel-neon-deploy` 分支，使用 Neon 验证分支和预览访问码。不能直接把 Preview 部署绑定到正式域名来代替 Production 构建，否则会沿用预览凭证。

Vercel 保留 Standard Protection：Preview 和生成的 deployment URL 受 Vercel Authentication 保护，正式域名直接到应用访问码页。当前无需关闭项目级保护，也无需购买付费保护功能。

## 发布与回退

1. 在 Preview 验证将要发布的确切代码提交。
2. 用同一代码提交和 Production 环境变量重新构建；检查 target、项目、提交及域名归属。
3. 从正式域名验证页面、`/api/health`、未登录拦截、访问码登录、模型调用和持久化。
4. 保留上一版 READY deployment；出现故障时在 Vercel 回退至适当的已知可用版本。后端版本不兼容时同时评估会话结构，不能用旧前端可访问证明新后端已恢复。

2026-10-23 的正式发布：

- 源码提交：`8906d715c2a3d0b212c1c4ffcd9bc3e91cd50934`。
- Production deployment：`dpl_BbhSmLXnXce6HaUL85A7j3SzJVTG`，READY。
- 正式域名已确认指向该 deployment。
- 之前的正式 deployment 为仅前端的旧版，不能作为完整云端 Agent 的回退验收基线。

## 本次验证证据

所有冲煮输入均为明确标注的模拟数据，不代表真实品饮或真实冲煮质量。

- Preview：浏览器手动完成第一杯、追问、第二杯及刷新；用户确认两杯记录和上升连线。独立 Neon 查询确认杯号为 `1、1、2`，前两轮无跨杯比较，第二杯对比为“变好”。
- Production：未登录 HTTP 检查确认 `/`、`/trajectory`、新版 JS 资源及 `/api/health` 正常，`/api/auth/me` 返回 401。
- Production：错误访问码被拒绝，正式码可登录；Cookie 属性和访客隔离检查通过。
- Production：通过真实 Gemini 完成冷启动及两杯模拟反馈；重新读取会话并独立查询 Neon 正式分支，确认两杯分别为 `1、2`，对比分别为 `n/a、变好`，冻结参数保持一致。本次模型没有触发追问；追问的云端验证来自上述 Preview 测试。
- 正式库中的该测试会话 ID 以 `deploy-check-` 开头，保留作为部署检查记录，不冒充用户采用数据。
- 日志巡检未完成：Vercel runtime logs 接口返回 403，本机无已认证 Vercel CLI；项目未配置 log drain。不能据此声称生产日志无错误或已有持续监控。

## 试用边界

- 共享访问码可以被转发，不是逐人授权；目前没有个人账号恢复或逐人使用额度。
- 轮换正式访问码或 Cookie 签名密钥会使已有访客 Cookie 失效。清 Cookie、换浏览器或换设备无法自动恢复原访客身份，页面历史也不是跨设备同步。
- Agent 记忆保存在 Neon；页面回执缓存保存在当前浏览器。普通刷新保留记录，主动开始一包新豆会切换会话。
- 模型请求消耗 Google 账号的调用费用和配额。本次上线未开通新的付费托管功能，免费额度不等于无限使用或硬性费用上限。
- 验收覆盖部署和有限模拟流程，不等于完整模型评测、真实冲煮实验、负载测试或生产可用性承诺。
