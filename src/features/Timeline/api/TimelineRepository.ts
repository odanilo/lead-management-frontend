import { httpClient } from '@/lib/httpClient';
import {
  GetLeadsRepositoryParams,
  Lead,
  PatchLeadStatusRepositoyRequest,
} from './TimelineApiTypes';
import { mockLeads } from '../utils/Timeline.utils';

export const getLeadsRepository = async (params?: GetLeadsRepositoryParams) => {
  // return await httpClient.get<GetLeadsRepositoryResponse>('leads', {
  //   params,
  // });

  if (params && (params.status === 'ACCEPTED' || params.status === 'PENDING')) {
    return { data: mockLeads.filter((lead) => lead.status === params.status) };
  }

  return {
    data: mockLeads,
  };
};

export const patchLeadStatusRepository = async ({
  leadId,
  newStatus,
}: PatchLeadStatusRepositoyRequest) => {
  return await httpClient.patch<Lead>(`leads/${leadId}/${newStatus}`);
};
