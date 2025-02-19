import { CardBase } from '@/components/card/CardBase';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TimelineCardHeader } from '../components/TimelineCard/TimelineCardHeader';
import { LeadProfile } from '../components/TimelineCard/LeadProfile';
import { LeadDetailsList } from '../components/TimelineCard/LeadDetailsList';
import { LeadDetailsItem } from '../components/TimelineCard/LeadDetailsItem';
import { LocationIcon } from '@/components/icons/LocationIcon';
import { BriefcaseIcon } from '@/components/icons/BriefcaseIcon';
import { TimelineCardMain } from '../components/TimelineCard/TimelineCardMain';
import { LeadDescription } from '../components/TimelineCard/LeadDescription';
import { TimelineCardFooter } from '../components/TimelineCard/TimelineCardFooter';
import { TimelineCardActions } from '../components/TimelineCard/TimelineCardActions';
import { LeadPrice } from '../components/TimelineCard/LeadPrice';
import { AvatarBase } from '@/components/avatar/AvatarBase';
import { LeadName } from '../components/TimelineCard/LeadName';
import { LeadDate } from '../components/TimelineCard/LeadDate';
import { PhoneIcon } from '@/components/icons/PhoneIcon';
import { EmailIcon } from '@/components/icons/EmailIcon';
import { TimelineLink } from '../components/TimelineCard/TimelineLink';

export function TimelineListView() {
  return (
    <Tabs defaultValue="invited">
      <TabsList className="w-full flex">
        <TabsTrigger value="invited">Invited</TabsTrigger>
        <TabsTrigger value="accepted">Accepted</TabsTrigger>
      </TabsList>

      <TabsContent value="invited" className="mt-4">
        <CardBase className="pb-4 text-gray-600" aria-labelledby="lead-name">
          <TimelineCardHeader className="pt-4">
            <LeadProfile>
              <AvatarBase
                alt="Profile picture of Bill"
                src="https://github.com/shadcn.png"
                fallback="B"
              />

              <div>
                <LeadName>Bill</LeadName>
                <LeadDate
                  dateTime="2025-01-04T14:37:00-05:00"
                  formattedDate="January 4 @ 2:37pm"
                />
              </div>
            </LeadProfile>

            <LeadDetailsList aria-label="Lead details">
              <LeadDetailsItem>
                <LocationIcon />
                Yandera 2574
              </LeadDetailsItem>

              <LeadDetailsItem>
                <BriefcaseIcon />
                Painters
              </LeadDetailsItem>

              <LeadDetailsItem>Job ID: 5577421</LeadDetailsItem>
            </LeadDetailsList>
          </TimelineCardHeader>

          <TimelineCardMain>
            <LeadDetailsList
              className="px-0 py-0 mt-0 border-t-0"
              aria-label="Lead contacts"
            >
              <LeadDetailsItem>
                <PhoneIcon />
                <TimelineLink
                  href="tel:0412345678"
                  aria-label="Call Bill at 0412345678"
                >
                  0412345678
                </TimelineLink>
              </LeadDetailsItem>

              <LeadDetailsItem>
                <EmailIcon />
                <TimelineLink
                  href="mailto:fake@mailinator.com"
                  aria-label="Email us at fake@mailinator.com"
                >
                  fake@mailinator.com
                </TimelineLink>
              </LeadDetailsItem>
            </LeadDetailsList>

            <LeadDescription>
              Need to paint 2 aluminum windows and a sliding glass door
            </LeadDescription>
          </TimelineCardMain>

          <TimelineCardFooter>
            <TimelineCardActions className="flex items-center gap-2">
              <Button>Accept</Button>
              <Button variant="secondary">Decline</Button>
            </TimelineCardActions>

            <LeadPrice label="Lead Invitation" price="$62.00" />
          </TimelineCardFooter>
        </CardBase>
      </TabsContent>
      <TabsContent value="accepted">Accepted list.</TabsContent>
    </Tabs>
  );
}
