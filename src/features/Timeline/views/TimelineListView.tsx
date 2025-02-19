import { TabsContent } from '@/components/ui/tabs';
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
import { LoadingSpinner } from '@/components/loading/LoadingSpiner';
import { TimelineLayout } from '../components/TimelineLayout';
import { TimelinePending } from '../components/TimelinePending';
import { TimelineError } from '../components/TimelineError';
import {
  BUTTON_ACCEPT_TEXT,
  BUTTON_DECLINE_TEXT,
  TAB_ACCEPTED_LABEL,
  TAB_INVITED_LABEL,
} from '../utils/Timeline.consts';

export function TimelineListView() {
  const {
    data: getPendingLeadsData,
    refetch: getPendingLeadsRefetch,
    isPending: isGetPeadingLeadsPending,
    error: getPendingLeadsError,
  } = useGetLeads({ status: 'PENDING' });
  const {
    data: getAcceptedLeadsData,
    refetch: getAcceptedLeadsRefetch,
    isPending: isGetAcceptedLeadsPending,
    error: getAcceptedLeadsError,
  } = useGetLeads({ status: 'ACCEPTED' });
  const {
    mutate: patchLeadStatusMutate,
    isPending: isPatchLeadStatusPending,
    variables: patchLeadStatusVariables,
  } = usePatchLeadStatus();

  const isPending = isGetPeadingLeadsPending || isGetAcceptedLeadsPending;
  const hasError = getPendingLeadsError || getAcceptedLeadsError;

  const tabs = [
    {
      value: 'invited',
      onTabClick: () => {
        getPendingLeadsRefetch();
      },
      label: TAB_INVITED_LABEL,
    },
    {
      value: 'accepted',
      onTabClick: () => {
        getAcceptedLeadsRefetch();
      },
      label: TAB_ACCEPTED_LABEL,
    },
  ];

  if (isPending) {
    return (
      <TimelineLayout tabs={tabs}>
        <TimelinePending />
      </TimelineLayout>
    );
  }

  if (hasError) {
    return (
      <TimelineLayout tabs={tabs}>
        <TimelineError />
      </TimelineLayout>
    );
  }

  return (
    <TimelineLayout tabs={tabs}>
      <section className="mt-6 [&>_*]:flex [&>_*]:flex-col [&>_*]:gap-4">
        <TabsContent value="invited">
          {getPendingLeadsData?.map((lead) => {
            const isPending =
              patchLeadStatusVariables?.leadId === lead.id &&
              isPatchLeadStatusPending;
            const isAcceptingLead =
              isPending && patchLeadStatusVariables.newStatus === 'ACCEPTED';
            const isDecliningLead =
              isPending && patchLeadStatusVariables.newStatus === 'DECLINED';

            return (
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
                      disabled={isPending}
                    >
                      {BUTTON_ACCEPT_TEXT}
                      {isAcceptingLead ? <LoadingSpinner /> : null}
                    </Button>
                    <Button
                      variant="secondary"
                      onClick={() =>
                        patchLeadStatusMutate({
                          leadId: lead.id,
                          newStatus: 'DECLINED',
                        })
                      }
                      disabled={isPending}
                    >
                      {BUTTON_DECLINE_TEXT}
                      {isDecliningLead ? <LoadingSpinner /> : null}
                    </Button>
                  </TimelineCardActions>

                  <LeadPrice>{lead.price}</LeadPrice>
                </TimelineCardFooter>
              </TimelineCard>
            );
          })}
        </TabsContent>
        <TabsContent value="accepted">
          {getAcceptedLeadsData?.map((lead) => (
            <TimelineCard key={lead.id} lead={lead}>
              <TimelineCardMain>
                <LeadContactInformation lead={lead} />
                <LeadDescription>{lead.description}</LeadDescription>
              </TimelineCardMain>
            </TimelineCard>
          ))}
        </TabsContent>
      </section>
    </TimelineLayout>
  );
}
