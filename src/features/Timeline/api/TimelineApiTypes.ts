export type LeadCategory =
  | 'Paintes'
  | 'Interior Painters'
  | 'General Building Work'
  | 'Home Renovations';

export type LeadStatus = 'PENDING' | 'ACCEPTED' | 'DECLINED';

export type Lead = {
  id: string;
  firstName: string;
  createAt: string;
  suburb: string;
  category: LeadCategory;
  description: string;
  price: number;
  status: LeadStatus;
  jobId: string;
  lastName?: string;
  phone?: string;
  email?: string;
  profilePicture?: string;
};

export type GetLeadsRepositoryParams = {
  status: LeadStatus;
};

export type GetLeadsRepositoryResponse = Lead[];

export type LeadServiceResult = Omit<
  Lead,
  'firstName' | 'lastName' | 'createAt'
> & {
  fullName: string;
  formattedDate: string;
  profilePictureFallback: string;
};

export type GetLeadsServiceResult = LeadServiceResult[];

export type PatchLeadStatusRepositoyRequest = {
  leadId: string;
  newStatus: LeadStatus;
};
