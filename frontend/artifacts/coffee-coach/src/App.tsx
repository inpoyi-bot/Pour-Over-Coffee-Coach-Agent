import { QueryClient, QueryClientProvider, useIsMutating } from '@tanstack/react-query';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import { createContext, useEffect, useState, type FormEvent } from 'react';
import type { AgentTurnResult } from '@/lib/adkClient';
import { loginWithAccessCode, logoutVisitor, restoreVisitor } from '@/lib/session';
import { Layout } from '@/components/layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import Home from '@/pages/home';
import Feedback from '@/pages/feedback';
import Diagnosis from '@/pages/diagnosis';
import Trajectory from '@/pages/trajectory';

export const AppContext = createContext<{
  latestTurn: AgentTurnResult | null;
  setLatestTurn: (t: AgentTurnResult | null) => void;
}>({
  latestTurn: null,
  setLatestTurn: () => {},
});

type AccessState =
  | { status: 'checking' | 'signed-out' | 'unavailable' }
  | { status: 'signed-in'; userId: string };

function accessError(error: unknown): string {
  if (error instanceof Error && !(error instanceof TypeError) && !(error instanceof SyntaxError)) {
    return error.message;
  }
  return '暂时无法连接，请检查网络后重试。';
}

function VisitorControls({ onLogout, busy, error }: {
  onLogout: () => void;
  busy: boolean;
  error: string;
}) {
  const pendingTurns = useIsMutating();
  return (
    <div className="px-6 pt-3 space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-xs text-muted-foreground">受邀试用</span>
        <Button type="button" variant="ghost" size="sm" onClick={onLogout}
          disabled={busy || pendingTurns > 0}>
          {busy ? '正在退出…' : '退出试用'}
        </Button>
      </div>
      {error && <p role="alert" className="text-sm text-destructive">{error}</p>}
    </div>
  );
}

function CoffeeApp({ onLogout, busy, error }: {
  onLogout: () => void;
  busy: boolean;
  error: string;
}) {
  // 访客退出或身份变化后，页面、请求缓存和本轮诊断一起重新建立。
  const [queryClient] = useState(() => new QueryClient());
  const [latestTurn, setLatestTurn] = useState<AgentTurnResult | null>(null);

  return (
    <QueryClientProvider client={queryClient}>
      <AppContext.Provider value={{ latestTurn, setLatestTurn }}>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <div inert={busy}>
            <Layout>
              <VisitorControls onLogout={onLogout} busy={busy} error={error} />
              <Switch>
                <Route path="/" component={Home} />
                <Route path="/feedback" component={Feedback} />
                <Route path="/diagnosis" component={Diagnosis} />
                <Route path="/trajectory" component={Trajectory} />
                <Route>
                  <div className="p-6 text-center text-muted-foreground">页面不存在</div>
                </Route>
              </Switch>
            </Layout>
          </div>
        </WouterRouter>
      </AppContext.Provider>
    </QueryClientProvider>
  );
}

function App() {
  const [access, setAccess] = useState<AccessState>({ status: 'checking' });
  const [attempt, setAttempt] = useState(0);
  const [accessCode, setAccessCode] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    let active = true;
    restoreVisitor().then((userId) => {
      if (active) setAccess(userId ? { status: 'signed-in', userId } : { status: 'signed-out' });
    }).catch((reason: unknown) => {
      if (active) {
        setError(accessError(reason));
        setAccess({ status: 'unavailable' });
      }
    });
    return () => { active = false; };
  }, [attempt]);

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy || !accessCode) return;
    setBusy(true);
    setError('');
    try {
      const userId = await loginWithAccessCode(accessCode);
      setAccess({ status: 'signed-in', userId });
    } catch (reason) {
      setError(accessError(reason));
    } finally {
      setAccessCode('');
      setBusy(false);
    }
  }

  async function handleLogout() {
    if (busy) return;
    setBusy(true);
    setError('');
    try {
      await logoutVisitor();
      setAccess({ status: 'signed-out' });
    } catch (reason) {
      setError(accessError(reason));
    } finally {
      setBusy(false);
    }
  }

  if (access.status === 'signed-in') {
    return <CoffeeApp key={access.userId} onLogout={handleLogout} busy={busy} error={error} />;
  }

  return (
    <div className="coldstart-shell min-h-[100dvh] bg-background text-foreground flex flex-col items-center">
      <header className="w-full max-w-md border-b border-border px-6 py-4 flex justify-between items-center">
        <span className="font-mono text-sm font-medium tracking-tight">COFFEE_COACH</span>
        <span className="text-xs text-muted-foreground">受邀试用</span>
      </header>
      <main className="w-full max-w-md px-6 py-12 space-y-6">
        {access.status === 'checking' ? (
          <p role="status" className="text-sm text-muted-foreground">正在确认登录状态…</p>
        ) : access.status === 'unavailable' ? (
          <>
            <h1 className="text-2xl font-medium">暂时无法连接</h1>
            <p role="alert" className="text-sm text-muted-foreground">{error}</p>
            <Button type="button" className="w-full" onClick={() => {
              setError('');
              setAccess({ status: 'checking' });
              setAttempt((value) => value + 1);
            }}>重新连接</Button>
          </>
        ) : (
          <>
            <div className="space-y-3">
              <h1 className="text-2xl font-medium">欢迎试用咖啡教练</h1>
              <p className="text-sm leading-relaxed text-muted-foreground">
                输入你收到的访问码，开始记录这包豆的冲煮。
              </p>
            </div>
            <form onSubmit={handleLogin} className="space-y-4" aria-busy={busy}>
              <div className="space-y-2">
                <label htmlFor="access-code" className="text-sm font-medium">访问码</label>
                <Input id="access-code" name="access-code" type="password"
                  autoComplete="current-password" autoCapitalize="off" spellCheck={false}
                  required maxLength={256} disabled={busy} value={accessCode}
                  aria-invalid={Boolean(error)}
                  aria-describedby={error ? 'access-code-help access-code-error' : 'access-code-help'}
                  onChange={(event) => { setAccessCode(event.target.value); setError(''); }}
                  className="h-12" />
                <p id="access-code-help" className="text-xs text-muted-foreground">访问码由邀请者提供。</p>
              </div>
              {error && <p id="access-code-error" role="alert" className="text-sm text-destructive">{error}</p>}
              <Button type="submit" className="w-full h-12" disabled={busy || !accessCode}>
                {busy ? '正在验证…' : '进入试用'}
              </Button>
            </form>
          </>
        )}
      </main>
    </div>
  );
}

export default App;
