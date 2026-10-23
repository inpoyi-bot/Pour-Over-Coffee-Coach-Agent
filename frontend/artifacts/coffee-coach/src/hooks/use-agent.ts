import { useMutation } from '@tanstack/react-query';
import { sendTurn, type AgentTurnResult, type TurnKind, type UserComparison } from '@/lib/adkClient';
import { getUserId, getSessionId } from '@/lib/session';

export function useSendTurn(turnKind: TurnKind = 'feedback') {
  return useMutation<AgentTurnResult, Error, string | { text: string; comparison: UserComparison }>({
    mutationFn: async (input) => {
      const { text, comparison } = typeof input === 'string' ? { text: input, comparison: undefined } : input;
      return sendTurn(getUserId(), getSessionId(), text, turnKind, comparison);
    }
  });
}
