import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useGetLeads } from '../hooks/useGetLeads';
import { TimelineCard } from '../components/TimelineCard/TimelineCard';

export function TimelineListView() {
  const { data: getPendingLeadsData, refetch: getPendingLeadsRefetch } =
    useGetLeads({ status: 'PENDING' });
  const { data: getAcceptedLeadsData, refetch: getAcceptedLeadsRefetch } =
    useGetLeads({ status: 'ACCEPTED' });

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
          <TimelineCard key={lead.id} lead={lead} />
        ))}
      </TabsContent>
      <TabsContent value="accepted" className="mt-6 flex flex-col gap-4">
        {getAcceptedLeadsData?.map((lead) => (
          <TimelineCard key={lead.id} lead={lead} />
        ))}
      </TabsContent>
    </Tabs>
  );
}
