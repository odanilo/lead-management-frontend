import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useGetLeads } from '../hooks/useGetLeads';
import { TimelineCard } from '../components/TimelineCard/TimelineCard';
import { usePatchLeadStatus } from '../hooks/usePatchLeadStatus';
import { TimelineCardMain } from '../components/TimelineCard/TimelineCardMain';
import { LeadDescription } from '../components/TimelineCard/LeadDescription';
import { LeadContactInformation } from '../components/TimelineCard/LeadContactInformation';
import { TimelineCardFooter } from '../components/TimelineCard/TimelineCardFooter';
import { TimelineCardActions } from '../components/TimelineCard/TimelineCardActions';
import { Button } from '@/components/ui/button';
import { LeadPrice } from '../components/TimelineCard/LeadPrice';

export function TimelineListView() {
  const { data: getPendingLeadsData, refetch: getPendingLeadsRefetch } =
    useGetLeads({ status: 'PENDING' });
  const { data: getAcceptedLeadsData, refetch: getAcceptedLeadsRefetch } =
    useGetLeads({ status: 'ACCEPTED' });
  const { mutate: patchLeadStatusMutate } = usePatchLeadStatus();

  return (
    <Tabs defaultValue="invited">
      <TabsList className="w-full flex">
        <TabsTrigger value="invited" onClick={() => getPendingLeadsRefetch()}>
          Invited
        </TabsTrigger>
        <TabsTrigger value="accepted" onClick={() => getAcceptedLeadsRefetch()}>
          Accepted
        </TabsTrigger>
      </TabsList>

      <TabsContent value="invited" className="mt-6 flex flex-col gap-4">
        {getPendingLeadsData?.map((lead) => (
          <TimelineCard key={lead.id} lead={lead}>
            <TimelineCardMain>
              <LeadDescription>{lead.description}</LeadDescription>
            </TimelineCardMain>

            <TimelineCardFooter>
              <TimelineCardActions className="flex items-center gap-2">
                <Button
                  onClick={() =>
                    patchLeadStatusMutate({
                      leadId: lead.id,
                      newStatus: 'ACCEPTED',
                    })
                  }
                >
                  Accept
                </Button>
                <Button
                  variant="secondary"
                  onClick={() =>
                    patchLeadStatusMutate({
                      leadId: lead.id,
                      newStatus: 'DECLINED',
                    })
                  }
                >
                  Decline
                </Button>
              </TimelineCardActions>

              <LeadPrice>{lead.price}</LeadPrice>
            </TimelineCardFooter>
          </TimelineCard>
        ))}
      </TabsContent>
      <TabsContent value="accepted" className="mt-6 flex flex-col gap-4">
        {getAcceptedLeadsData?.map((lead) => (
          <TimelineCard key={lead.id} lead={lead}>
            <TimelineCardMain>
              <LeadContactInformation lead={lead} />
              <LeadDescription>{lead.description}</LeadDescription>
            </TimelineCardMain>
          </TimelineCard>
        ))}
      </TabsContent>
    </Tabs>
  );
}
