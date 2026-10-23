/**
 * ADK api_server client.
 *
 * ★ IMPORTANT (HANDOFF-replit.md §2): the repo this spec was written for has
 * an existing local demo frontend that already talks to this exact backend.
 * That reference frontend was NOT available inside this workspace when this
 * client was written, so the shapes below follow the standard/documented
 * ADK `api_server` REST contract (session CRUD + `/run`). If your local demo
 * frontend's request/response shapes differ (e.g. a different session
 * bootstrap call, or `/run_sse` instead of `/run`), adjust the two functions
 * below to match it -- everything else in the app is built against the
 * `AgentTurnResult` shape returned by `sendTurn`, not against ADK's wire
 * format directly, so the blast radius of a protocol fix is contained here.
 */
import { ADK_APP_NAME, ADK_BASE_URL } from './config';

export interface AdkPart {
  text?: string;
  thought?: boolean;
  functionCall?: { name: string; args?: Record<string, unknown> };
  functionResponse?: { name: string; response?: Record<string, unknown> };
}

/** 仅描述 UI 回合来源；诊断内容仍以自然语言传入 Agent。 */
export type TurnKind = 'cold_start' | 'feedback' | 'probe' | 'conversation';
export type UserComparison = '变好' | '变坏' | '没变' | '说不清';

export interface AdkEvent {
  author?: string;
  content?: { role?: string; parts?: AdkPart[] };
}

/** The structured diagnosis payload the agent reports back per turn.
 * Field names/values remain raw at the transport boundary; user-facing
 * components translate them through diagnosisCopy.ts per FRONTEND.md. */
export interface RecordCup {
  /** cup_no 是旧版回合序号；网页的真实杯号由服务端 brew_no 给出。 */
  cup_no?: number;
  brew_no?: number;
  turn_no?: number;
  input_kind?: TurnKind;
  comparison?: UserComparison | 'n/a';
  date?: string;
  turn_type?: string;
  terminate_reason?: string;
  gradient?: string;
  direction?: string;
  step?: string | number;
  decision?: string;
  grind_now?: string;
  confidence?: 'low' | 'medium' | 'high' | string;
  rationale?: string;
  axis?: string;
  [key: string]: unknown;
}

type RecordCupToolResponse = {
  record?: RecordCup;
};

/** Structured seed returned by start_bag. Keep these user-facing fields
 * separate from the agent's free-text explanation so the cold-start screen
 * can reliably show the frozen baseline. */
export interface SeedRecipe {
  比例?: string;
  水温?: string;
  粉量?: string;
  研磨基准?: string;
  注水手法?: string;
}

export interface StartBagResult {
  seed_recipe?: SeedRecipe;
  [key: string]: unknown;
}

export interface AgentTurnResult {
  /** Every text part the agent said this turn, in order. */
  messages: string[];
  /** The exact record returned by a successful record_cup write, if any. */
  recordCup: RecordCup | null;
  /** Structured start_bag output, present only on the cold-start turn. */
  startBag: StartBagResult | null;
  /** Full raw event list, kept for debugging / IP-sensitive screens that
   * want to inspect more than messages + recordCup. */
  rawEvents: AdkEvent[];
}

async function parseJsonOrThrow(res: Response, context: string) {
  if (!res.ok) {
    const body = await res.text().catch(() => '');
    if (res.status === 502 || res.status === 409) {
      let detail: string | undefined;
      try {
        const error = JSON.parse(body);
        if (typeof error.detail === 'string') detail = error.detail;
      } catch { /* 非 JSON 错误仍使用下方通用处理。 */ }
      if (detail) throw new Error(detail);
    }
    throw new Error(
      `ADK request failed (${context}): ${res.status} ${res.statusText} ${body}`.trim(),
    );
  }
  return res.json();
}

/**
 * Ensures a session exists for (userId, sessionId). Idempotent: if the
 * session already exists, ADK returns 400/409 which we swallow.
 */
export async function ensureSession(
  userId: string,
  sessionId: string,
): Promise<void> {
  const url = `${ADK_BASE_URL}/apps/${encodeURIComponent(ADK_APP_NAME)}/users/${encodeURIComponent(
    userId,
  )}/sessions/${encodeURIComponent(sessionId)}`;

  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ state: {} }),
  });

  if (res.ok) return;
  if (res.status === 400 || res.status === 409) return; // already exists
  const body = await res.text().catch(() => '');
  throw new Error(
    `Failed to create ADK session: ${res.status} ${res.statusText} ${body}`.trim(),
  );
}

function extractRecordCup(events: AdkEvent[]): RecordCup | null {
  let persistedRecord: RecordCup | null = null;

  for (let i = events.length - 1; i >= 0; i -= 1) {
    const parts = events[i]?.content?.parts ?? [];
    for (const part of parts) {
      const fr = part.functionResponse;
      if (fr?.name === 'record_cup' && !persistedRecord) {
        const response = fr.response as (RecordCupToolResponse & { ok?: boolean }) | undefined;
        if (response?.ok === true) persistedRecord = response.record ?? null;
      }
    }
  }

  // 调用参数只是模型意图，不能当成数据库已经保存的记录。
  return persistedRecord;
}

function extractStartBag(events: AdkEvent[]): StartBagResult | null {
  for (let i = events.length - 1; i >= 0; i -= 1) {
    const parts = events[i]?.content?.parts ?? [];
    for (const part of parts) {
      const response = part.functionResponse;
      if (response && /start_bag/i.test(response.name ?? '')) {
        return (response.response as StartBagResult) ?? null;
      }
    }
  }
  return null;
}

function extractMessages(events: AdkEvent[]): string[] {
  const messages: string[] = [];
  for (const event of events) {
    if (event.content?.role !== 'model') continue;
    for (const part of event.content?.parts ?? []) {
      if (!part.thought && part.text && part.text.trim().length > 0) {
        messages.push(part.text.trim());
      }
    }
  }
  return messages;
}

/**
 * Sends one natural-language user turn to the agent and returns the
 * agent's reply text(s) plus any record_cup payload emitted this turn.
 *
 * ★ Per FRONTEND.md 屏2 / HANDOFF-replit.md §6: `text` must always be a
 * natural-language sentence assembled from the user's structured form
 * choices (see `nlAssembly.ts`) -- never a raw JSON payload.
 */
export async function sendTurn(
  userId: string,
  sessionId: string,
  text: string,
  turnKind: TurnKind,
  comparison?: UserComparison,
): Promise<AgentTurnResult> {
  await ensureSession(userId, sessionId);

  const res = await fetch(`${ADK_BASE_URL}/run`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      appName: ADK_APP_NAME,
      userId,
      sessionId,
      turnKind,
      comparison,
      newMessage: {
        role: 'user',
        parts: [{ text }],
      },
    }),
  });

  const events: AdkEvent[] = await parseJsonOrThrow(res, '/run');
  const recordCup = extractRecordCup(events);
  if ((turnKind === 'feedback' || turnKind === 'probe') && !recordCup) {
    throw new Error('本轮未收到已保存的记录，请勿重复提交，先联系邀请者核对。');
  }

  return {
    messages: extractMessages(events),
    recordCup,
    startBag: extractStartBag(events),
    rawEvents: events,
  };
}
