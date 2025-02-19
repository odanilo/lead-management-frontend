import { cn } from '@/lib/utils';
import { ComponentProps, PropsWithChildren } from 'react';

type TimelineCardFooterProps = {
  className?: string;
} & ComponentProps<'footer'>;

export function TimelineCardFooter({
  children,
  className,
}: PropsWithChildren<TimelineCardFooterProps>) {
  return (
    <footer
      className={cn(
        'flex flex-wrap items-center gap-4 px-6 pt-4 mt-4 border-t-1 border-gray-100',
        className,
      )}
    >
      {children}
    </footer>
  );
}
