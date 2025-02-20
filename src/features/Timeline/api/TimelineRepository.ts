import { httpClient } from '@/lib/httpClient';
import {
  GetLeadsRepositoryParams,
  GetLeadsRepositoryResponse,
  Lead,
  PatchLeadStatusRepositoyRequest,
} from './TimelineApiTypes';
import { mockLeads } from '../utils/Timeline.utils';

export const getLeadsRepository = async (
  params?: GetLeadsRepositoryParams,
): Promise<{ data: GetLeadsRepositoryResponse }> => {
  // return await httpClient.get<GetLeadsRepositoryResponse>('leads', {
  //   params,
  // });

  return new Promise((resolve) => {
    setTimeout(() => {
      if (
        params &&
        (params.status === 'ACCEPTED' || params.status === 'PENDING')
      ) {
        return resolve({
          data: mockLeads.filter((lead) => lead.status === params.status),
        });
      }

      return resolve({
        data: mockLeads,
      });
    }, 1200);
  });
};

export const patchLeadStatusRepository = async ({
  leadId,
  newStatus,
}: PatchLeadStatusRepositoyRequest) => {
  return await httpClient.patch<Lead>(`leads/${leadId}/${newStatus}`);
};
