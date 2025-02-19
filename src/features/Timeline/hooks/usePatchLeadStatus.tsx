import { useMutation } from '@tanstack/react-query';
import { patchLeadStatusService } from '../api/TimelineService';
import { PatchLeadStatusRepositoyRequest } from '../api/TimelineApiTypes';
import { queryClient } from '@/lib/queryClient';
import { getGetLeadsQueryKey } from './useGetLeads';
import { useToast } from '@/hooks/use-toast';
import {
  ERROR_PATCH_LEAD_STATUS_TITLE,
  SUCCESS_PATCH_LEAD_STATUS_DESCRIPTION,
  SUCCESS_PATCH_LEAD_STATUS_TITLE,
} from '../utils/Timeline.consts';

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
        title: SUCCESS_PATCH_LEAD_STATUS_TITLE,
        description: `${SUCCESS_PATCH_LEAD_STATUS_DESCRIPTION} ${request.newStatus}`,
      });
    },
    onError: (error) => {
      const errorDescription = error.message || error;

      toast({
        title: ERROR_PATCH_LEAD_STATUS_TITLE,
        description: `${errorDescription}`,
        variant: 'destructive',
      });
    },
  });

  return mutation;
}
