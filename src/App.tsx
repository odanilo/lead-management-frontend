import { Container } from '@/components/container/Container';
import { TimelineListView } from './features/Timeline/views/TimelineListView';

export function App() {
  return (
    <Container className="py-8">
      <TimelineListView />
    </Container>
  );
}
