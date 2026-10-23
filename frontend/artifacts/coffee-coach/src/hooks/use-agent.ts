import { useMutation } from '@tanstack/react-query';
import { sendTurn, type AgentTurnResult, type TurnKind } from '@/lib/adkClient';
import { getUserId, getSessionId } from '@/lib/session';

export function useSendTurn(turnKind: TurnKind = 'feedback') {
  return useMutation<AgentTurnResult, Error, string>({
    mutationFn: async (text: string) => {
      return sendTurn(getUserId(), getSessionId(), text, turnKind);
    }
  });
}
