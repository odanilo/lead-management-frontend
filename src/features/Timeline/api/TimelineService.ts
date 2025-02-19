import { mapGetLeadsService } from '../utils/Timeline.utils';
import {
  GetLeadsRepositoryParams,
  GetLeadsServiceResult,
  PatchLeadStatusRepositoyRequest,
} from './TimelineApiTypes';
import {
  getLeadsRepository,
  patchLeadStatusRepository,
} from './TimelineRepository';

export const getLeadsService = async (
  params?: GetLeadsRepositoryParams,
): Promise<GetLeadsServiceResult> => {
  const { data } = await getLeadsRepository(params);

  return data.map((lead) => mapGetLeadsService(lead));
};

export const patchLeadStatusService = async (
  request: PatchLeadStatusRepositoyRequest,
) => {
  const { data } = await patchLeadStatusRepository(request);

  return data;
};
