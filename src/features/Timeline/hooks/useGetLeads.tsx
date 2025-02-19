import { useQuery } from '@tanstack/react-query';
import { GetLeadsRepositoryParams, LeadStatus } from '../api/TimelineApiTypes';
import { getLeadsService } from '../api/TimelineService';

const QUERY_KEY = 'leads';

export function getGetLeadsQueryKey(status?: LeadStatus) {
  if (status === undefined) {
    return [QUERY_KEY];
  }

  return [QUERY_KEY, status];
}

export function useGetLeads(params?: GetLeadsRepositoryParams) {
  const query = useQuery({
    queryKey: getGetLeadsQueryKey(params?.status),
    queryFn: () => getLeadsService(params),
  });

  return query;
}
