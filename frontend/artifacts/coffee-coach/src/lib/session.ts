/**
 * 访问码登录与这位访客的页面缓存。
 * 后端用 HttpOnly Cookie 验证身份，前端只接收已确认的 userId。
 * Neon 中的 ADK session 是 Agent 记忆；localStorage 保存页面展示的回执。
 * 缓存按访客分组，避免 Cookie 更换后把另一位访客的“上一杯”显示出来。
 */
import type { RecordCup, SeedRecipe } from './adkClient';
import { ADK_BASE_URL } from './config';

const SESSION_ID_KEY = 'coffee-coach:session-id';
const CUPS_KEY = 'coffee-coach:cups';
const SEED_KEY = 'coffee-coach:seed';
const SEED_RECIPE_KEY = 'coffee-coach:seed-recipe';
const LATEST_SENSORY_KEY = 'coffee-coach:latest-sensory';

// 页面刷新后先向后端确认 Cookie；旧 localStorage ID 不能证明已登录。
let verifiedUserId: string | null = null;

async function acceptVisitor(response: Response): Promise<string> {
  const visitor: unknown = await response.json();
  if (
    !visitor || typeof visitor !== 'object' ||
    !('userId' in visitor) || typeof visitor.userId !== 'string' ||
    !/^guest-[a-f0-9]{32}$/.test(visitor.userId)
  ) {
    throw new Error('登录信息不完整，请重新登录。');
  }
  verifiedUserId = visitor.userId;
  return verifiedUserId;
}

/** 恢复 Cookie 中的访客。401 表示需登录；网络或服务故障另行报错。 */
export async function restoreVisitor(): Promise<string | null> {
  verifiedUserId = null;
  const response = await fetch(`${ADK_BASE_URL}/auth/me`, {
    credentials: 'same-origin', cache: 'no-store',
  });
  if (response.status === 401) return null;
  if (!response.ok) throw new Error('暂时无法确认登录状态，请稍后重试。');
  return acceptVisitor(response);
}

/** 访问码只发送给后端验证，不写入浏览器存储。 */
export async function loginWithAccessCode(accessCode: string): Promise<string> {
  verifiedUserId = null;
  if (!accessCode || accessCode.length > 256) {
    throw new Error('请输入有效的访问码。');
  }
  const response = await fetch(`${ADK_BASE_URL}/auth/login`, {
    method: 'POST', credentials: 'same-origin', cache: 'no-store',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ access_code: accessCode }),
  });
  if (response.status === 401 || response.status === 422) {
    throw new Error('访问码不正确，请检查后重试。');
  }
  if (!response.ok) throw new Error('暂时无法登录，请稍后重试。');
  return acceptVisitor(response);
}

export async function logoutVisitor(): Promise<void> {
  const response = await fetch(`${ADK_BASE_URL}/auth/logout`, {
    method: 'POST', credentials: 'same-origin', cache: 'no-store',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({}),
  });
  if (!response.ok) throw new Error('退出未完成，请重试。');
  verifiedUserId = null;
}

function randomId(prefix: string): string {
  return `${prefix}-${Math.random().toString(36).slice(2, 10)}${Date.now().toString(36)}`;
}

export function getUserId(): string {
  if (!verifiedUserId) throw new Error('请先输入访问码登录。');
  return verifiedUserId;
}

function storageKey(key: string): string {
  return `${key}:${getUserId()}`;
}

export function getSessionId(): string {
  const key = storageKey(SESSION_ID_KEY);
  let id = localStorage.getItem(key);
  if (!id) {
    id = randomId('session');
    localStorage.setItem(key, id);
  }
  return id;
}

/** Resets the ADK session while keeping the same persistent user id.
 * The caller clears cup history only when the user explicitly starts a new
 * bag; ordinary refreshes and reopened tabs keep the current bag's history. */
export function startNewSession(): string {
  const id = randomId('session');
  localStorage.setItem(storageKey(SESSION_ID_KEY), id);
  return id;
}

export interface StoredCup extends RecordCup {
  /** Local receipt timestamp, independent of any `date` field the agent reports. */
  recordedAt: string;
}

export interface BrewGroup {
  brewNo: number | null;
  turns: StoredCup[];
  latest: StoredCup;
}

/** 保留逐回合回执，仅按服务端明确给出的杯号分组；不推断旧版回合属于哪杯。 */
export function groupBrewHistory(history: StoredCup[]): BrewGroup[] {
  const groups: BrewGroup[] = [];
  const byBrew = new Map<number, BrewGroup>();
  for (const turn of history) {
    const brewNo = typeof turn.brew_no === 'number' && Number.isInteger(turn.brew_no) && turn.brew_no > 0
      ? turn.brew_no : null;
    const existing = brewNo === null ? undefined : byBrew.get(brewNo);
    if (existing) {
      existing.turns.push(turn);
      existing.latest = turn;
    } else {
      const group = { brewNo, turns: [turn], latest: turn };
      groups.push(group);
      if (brewNo !== null) byBrew.set(brewNo, group);
    }
  }
  return groups;
}

/** 每杯一个点。未知比较保留断点，不当成“没变化”，也不跨断点累计。 */
export function buildBrewTrend(groups: BrewGroup[]) {
  let height = 0;
  let previousKnown = false;
  return groups.filter((group) => group.brewNo !== null).map((group, index) => {
    const comparison = group.latest.comparison;
    const known = comparison === '变好' || comparison === '变坏' || comparison === '没变';
    let value: number | null = null;
    const segmentStart = !previousKnown;
    if (index === 0 && group.brewNo === 1) {
      value = 0; // 第一杯只是比较起点，不宣称变好、变坏或没变。
    } else if (known) {
      height = previousKnown ? height + (comparison === '变好' ? 1 : comparison === '变坏' ? -1 : 0) : 0;
      value = height;
    }
    previousKnown = value !== null;
    return { record: group.latest, brewNo: group.brewNo!, value, segmentStart };
  });
}

export function getCupHistory(): StoredCup[] {
  if (!verifiedUserId) return [];
  const raw = localStorage.getItem(storageKey(CUPS_KEY));
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function appendCup(cup: RecordCup): StoredCup[] {
  const history = getCupHistory();
  const withTimestamp: StoredCup = { ...cup, recordedAt: new Date().toISOString() };
  const next = [...history, withTimestamp];
  localStorage.setItem(storageKey(CUPS_KEY), JSON.stringify(next));
  return next;
}

export function clearCupHistory(): void {
  localStorage.removeItem(storageKey(CUPS_KEY));
}

/**
 * Keeps the user's unmodified sensory-button choices for the current cup.
 * The agent's `record_cup.sensory` is a free-text normalization, so it is
 * deliberately not used to decide which probe options the UI may show.
 */
export function getLatestSensory(): string[] {
  if (!verifiedUserId) return [];
  const raw = localStorage.getItem(storageKey(LATEST_SENSORY_KEY));
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) && parsed.every((item) => typeof item === 'string')
      ? parsed
      : [];
  } catch {
    return [];
  }
}

export function setLatestSensory(sensory: string[]): void {
  localStorage.setItem(storageKey(LATEST_SENSORY_KEY), JSON.stringify(sensory));
}

export function clearLatestSensory(): void {
  localStorage.removeItem(storageKey(LATEST_SENSORY_KEY));
}

/** Cold-start seed recipe text returned by the agent, shown on later screens. */
export function getSeed(): string | null {
  return verifiedUserId ? localStorage.getItem(storageKey(SEED_KEY)) : null;
}

export function setSeed(seedText: string): void {
  localStorage.setItem(storageKey(SEED_KEY), seedText);
}

export function getSeedRecipe(): SeedRecipe | null {
  if (!verifiedUserId) return null;
  const raw = localStorage.getItem(storageKey(SEED_RECIPE_KEY));
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === 'object' ? (parsed as SeedRecipe) : null;
  } catch {
    return null;
  }
}

export function setSeedRecipe(recipe: SeedRecipe | null): void {
  if (!recipe) {
    localStorage.removeItem(storageKey(SEED_RECIPE_KEY));
    return;
  }
  localStorage.setItem(storageKey(SEED_RECIPE_KEY), JSON.stringify(recipe));
}
