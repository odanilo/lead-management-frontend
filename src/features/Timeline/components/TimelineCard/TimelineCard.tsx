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
import { ComponentProps, PropsWithChildren } from 'react';

type TimelineCardProps = {
  lead: LeadServiceResult;
} & ComponentProps<'article'>;

export function TimelineCard({
  lead,
  children,
  ...rest
}: PropsWithChildren<TimelineCardProps>) {
  return (
    <CardBase
      key={lead.id}
      className="pb-4 text-gray-600"
      aria-labelledby="lead-name"
      {...rest}
    >
      <TimelineCardHeader className="pt-4">
        <LeadProfile>
          <AvatarBase
            alt={`Profile picture of ${lead.fullName}`}
            src={lead.profilePicture}
            fallback={lead.profilePictureFallback}
          />

          <div>
            <LeadName data-cy="TimelineCard_Title">{lead.fullName}</LeadName>
            <LeadDate
              dateTime={lead.createAt}
              formattedDate={lead.formattedDate}
              data-cy="TimelineCard_Time"
            />
          </div>
        </LeadProfile>

        <LeadDetailsList
          aria-label="Lead details"
          data-cy="TimelineCard_Lead_Details"
        >
          <LeadDetailsItem data-cy="TimelineCard_Lead_Suburb">
            <LocationIcon />
            {lead.suburb}
          </LeadDetailsItem>

          <LeadDetailsItem data-cy="TimelineCard_Lead_Category">
            <BriefcaseIcon />
            {lead.category}
          </LeadDetailsItem>

          <LeadDetailsItem data-cy="TimelineCard_Lead_JobId">
            Job ID: {lead.jobId}
          </LeadDetailsItem>
        </LeadDetailsList>
      </TimelineCardHeader>

      {children}
    </CardBase>
  );
}
