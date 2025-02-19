import { useMutation } from '@tanstack/react-query';
import { patchLeadStatusService } from '../api/TimelineService';
import { PatchLeadStatusRepositoyRequest } from '../api/TimelineApiTypes';
import { queryClient } from '@/lib/queryClient';
import { getGetLeadsQueryKey } from './useGetLeads';

export function usePatchLeadStatus() {
  const mutation = useMutation({
    mutationFn: (request: PatchLeadStatusRepositoyRequest) =>
      patchLeadStatusService(request),
    onSuccess: async (_, request) => {
      await queryClient.invalidateQueries({
        queryKey: getGetLeadsQueryKey(request.newStatus),
      });
    },
  });

  return mutation;
}
