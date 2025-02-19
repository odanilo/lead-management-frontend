import { CardBase } from '@/components/card/CardBase';
import { LeadServiceResult } from '../../api/TimelineApiTypes';
import { TimelineCardHeader } from './TimelineCardHeader';
import { LeadProfile } from './LeadProfile';
import { AvatarBase } from '@/components/avatar/AvatarBase';
import { LeadName } from './LeadName';
import { LeadDate } from './LeadDate';
import { LeadDetailsList } from './LeadDetailsList';
import { LeadDetailsItem } from './LeadDetailsItem';
import { LocationIcon } from '@/components/icons/LocationIcon';
import { BriefcaseIcon } from '@/components/icons/BriefcaseIcon';
import { PropsWithChildren } from 'react';

type TimelineCardProps = {
  lead: LeadServiceResult;
};

export function TimelineCard({
  lead,
  children,
}: PropsWithChildren<TimelineCardProps>) {
  return (
    <CardBase
      key={lead.id}
      className="pb-4 text-gray-600"
      aria-labelledby="lead-name"
    >
      <TimelineCardHeader className="pt-4">
        <LeadProfile>
          <AvatarBase
            alt={`Profile picture of ${lead.fullName}`}
            src={lead.profilePicture}
            fallback={lead.profilePictureFallback}
          />

          <div>
            <LeadName>{lead.fullName}</LeadName>
            <LeadDate
              dateTime={lead.createAt}
              formattedDate={lead.formattedDate}
            />
          </div>
        </LeadProfile>

        <LeadDetailsList aria-label="Lead details">
          <LeadDetailsItem>
            <LocationIcon />
            {lead.suburb}
          </LeadDetailsItem>

          <LeadDetailsItem>
            <BriefcaseIcon />
            {lead.category}
          </LeadDetailsItem>

          <LeadDetailsItem>Job ID: {lead.jobId}</LeadDetailsItem>
        </LeadDetailsList>
      </TimelineCardHeader>

      {children}
    </CardBase>
  );
}
