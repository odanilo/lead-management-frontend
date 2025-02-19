import {
  GetLeadsRepositoryResponse,
  Lead,
  LeadServiceResult,
} from '../api/TimelineApiTypes';

function timestampToFormattedDate(
  datetime: string,
  timezone: string = 'America/Sao_Paulo',
) {
  const date = new Date(datetime + 'Z');
  return new Intl.DateTimeFormat('en-US', {
    timeZone: timezone,
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  })
    .format(date)
    .replace('at', '@');
}

function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price);
}

function getFullName(firstName: string, lastName?: string): string {
  return lastName ? `${firstName} ${lastName}` : firstName;
}

function getNameInitials(fullName: string) {
  return fullName
    .split(' ')
    .map((name) => name.charAt(0))
    .join('');
}

export function mapGetLeadsService(data: Lead): LeadServiceResult {
  const fullName = getFullName(data.firstName, data.lastName);

  return {
    ...data,
    fullName,
    formattedDate: timestampToFormattedDate(data.createAt),
    profilePictureFallback: getNameInitials(fullName),
    price: formatPrice(data.price),
  };
}

export const mockLeads: GetLeadsRepositoryResponse = [
  {
    id: '1',
    firstName: 'John',
    createAt: '2025-01-04 14:37:00',
    suburb: 'Brooklyn',
    category: 'Paintes',
    description: 'Paint the exterior of a house.',
    price: 150.0,
    status: 'PENDING',
    jobId: 'J1001',
  },
  {
    id: '2',
    firstName: 'Sarah',
    lastName: 'Miller',
    createAt: '2025-01-05 10:15:00',
    suburb: 'Queens',
    category: 'Interior Painters',
    description: 'Repaint a living room.',
    price: 200.0,
    status: 'ACCEPTED',
    jobId: 'J1002',
    phone: '+15551234567',
    email: 'sarah@example.com',
  },
  {
    id: '3',
    firstName: 'Tom',
    lastName: 'Carter',
    createAt: '2025-01-06 09:45:00',
    suburb: 'Manhattan',
    category: 'General Building Work',
    description: 'Install a new drywall.',
    price: 300.0,
    status: 'DECLINED',
    jobId: 'J1003',
  },
  {
    id: '4',
    firstName: 'Emma',
    createAt: '2025-01-07 14:00:00',
    suburb: 'Bronx',
    category: 'Home Renovations',
    description: 'Kitchen remodeling.',
    price: 5000.2,
    status: 'PENDING',
    jobId: 'J1004',
  },
  {
    id: '5',
    firstName: 'James',
    lastName: 'Williams',
    createAt: '2025-01-08 12:30:00',
    suburb: 'Staten Island',
    category: 'Paintes',
    description: 'Fence painting job.',
    price: 120.0,
    status: 'ACCEPTED',
    jobId: 'J1005',
    phone: '+15552345678',
    email: 'james@example.com',
  },
  {
    id: '6',
    firstName: 'Olivia',
    lastName: 'Brown',
    createAt: '2025-01-09 08:20:00',
    suburb: 'Newark',
    category: 'Interior Painters',
    description: 'Ceiling repaint.',
    price: 180.0,
    status: 'DECLINED',
    jobId: 'J1006',
  },
  {
    id: '7',
    firstName: 'Michael',
    createAt: '2025-01-10 16:00:00',
    suburb: 'Jersey City',
    category: 'General Building Work',
    description: 'Build a wooden deck.',
    price: 2500.0,
    status: 'PENDING',
    jobId: 'J1007',
  },
  {
    id: '8',
    firstName: 'Sophia',
    lastName: 'Davis',
    createAt: '2025-01-11 07:50:00',
    suburb: 'Hoboken',
    category: 'Home Renovations',
    description: 'Full home makeover.',
    price: 10000.0,
    status: 'ACCEPTED',
    jobId: 'J1008',
    phone: '+15553456789',
    email: 'sophia@example.com',
  },
  {
    id: '9',
    firstName: 'William',
    lastName: 'Jones',
    createAt: '2025-01-12 13:40:00',
    suburb: 'Long Island',
    category: 'Paintes',
    description: 'Painting a garage door.',
    price: 90.0,
    status: 'DECLINED',
    jobId: 'J1009',
  },
  {
    id: '10',
    firstName: 'Ava',
    createAt: '2025-01-13 11:10:00',
    suburb: 'Yonkers',
    category: 'Interior Painters',
    description: 'Painting a master bedroom.',
    price: 220.0,
    status: 'PENDING',
    jobId: 'J1010',
  },
];
