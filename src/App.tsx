import { QueryClientProvider } from '@tanstack/react-query';

import { Container } from '@/components/container/Container';
import { TimelineListView } from './features/Timeline/views/TimelineListView';
import { queryClient } from './lib/queryClient';

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Container className="py-8">
        <TimelineListView />
      </Container>
    </QueryClientProvider>
  );
}
