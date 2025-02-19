import { useMutation } from '@tanstack/react-query';
import { patchLeadStatusService } from '../api/TimelineService';
import { PatchLeadStatusRepositoyRequest } from '../api/TimelineApiTypes';
import { queryClient } from '@/lib/queryClient';
import { getGetLeadsQueryKey } from './useGetLeads';
import { useToast } from '@/hooks/use-toast';

export function usePatchLeadStatus() {
  const { toast } = useToast();

  const mutation = useMutation({
    mutationFn: (request: PatchLeadStatusRepositoyRequest) =>
      patchLeadStatusService(request),
    onSuccess: async (_, request) => {
      await queryClient.invalidateQueries({
        queryKey: getGetLeadsQueryKey(request.newStatus),
      });

      toast({
        title: 'Lead alterado com sucesso',
        description: `Agora o lead estará com o status ${request.newStatus}`,
      });
    },
    onError: (error) => {
      const errorDescription = error.message || error;

      toast({
        title: 'Não foi possível alterar o lead',
        description: `${errorDescription}`,
        variant: 'destructive',
      });
    },
  });

  return mutation;
}
