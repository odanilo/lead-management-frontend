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
import { TimelineCardMain } from './TimelineCardMain';
import { PhoneIcon } from '@/components/icons/PhoneIcon';
import { TimelineLink } from './TimelineLink';
import { EmailIcon } from '@/components/icons/EmailIcon';
import { LeadDescription } from './LeadDescription';
import { TimelineCardFooter } from './TimelineCardFooter';
import { TimelineCardActions } from './TimelineCardActions';
import { Button } from '@/components/ui/button';
import { LeadPrice } from './LeadPrice';

type TimelineCardProps = {
  lead: LeadServiceResult;
};

export function TimelineCard({ lead }: Readonly<TimelineCardProps>) {
  const hasContactInformation = lead.email || lead.phone;

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

      <TimelineCardMain>
        {hasContactInformation ? (
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
        ) : null}

        <LeadDescription>{lead.description}</LeadDescription>
      </TimelineCardMain>

      <TimelineCardFooter>
        <TimelineCardActions className="flex items-center gap-2">
          <Button>Accept</Button>
          <Button variant="secondary">Decline</Button>
        </TimelineCardActions>

        <LeadPrice>{lead.price}</LeadPrice>
      </TimelineCardFooter>
    </CardBase>
  );
}
