import { PhoneIcon } from '@/components/icons/PhoneIcon';
import { LeadDetailsItem } from './LeadDetailsItem';
import { LeadDetailsList } from './LeadDetailsList';
import { TimelineLink } from './TimelineLink';
import { EmailIcon } from '@/components/icons/EmailIcon';
import { LeadServiceResult } from '../../api/TimelineApiTypes';

type LeadContactInformationProps = {
  lead: LeadServiceResult;
};

export function LeadContactInformation({
  lead,
}: Readonly<LeadContactInformationProps>) {
  return (
    <LeadDetailsList
      className="px-0 py-0 mt-0 border-t-0"
      aria-label="Lead contacts"
    >
      <LeadDetailsItem>
        <PhoneIcon />
        <TimelineLink
          href={`tel:${lead.phone}`}
          aria-label={`Call ${lead.fullName} at ${lead.phone}`}
        >
          {lead.phone}
        </TimelineLink>
      </LeadDetailsItem>

      <LeadDetailsItem>
        <EmailIcon />
        <TimelineLink
          href={`mailto:${lead.email}`}
          aria-label={`Email us at ${lead.email}`}
        >
          {lead.email}
        </TimelineLink>
      </LeadDetailsItem>
    </LeadDetailsList>
  );
}
