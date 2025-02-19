import { LoadingSpinner } from '@/components/loading/LoadingSpiner';
import { cn } from '@/lib/utils';

type TimelinePendingProps = {
  className?: string;
};

export function TimelinePending({ className }: Readonly<TimelinePendingProps>) {
  return (
    <div className={cn('mt-6 flex justify-center', className)}>
      <LoadingSpinner />
    </div>
  );
}
