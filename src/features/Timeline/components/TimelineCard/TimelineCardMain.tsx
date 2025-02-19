import { cn } from '@/lib/utils';
import { ComponentProps, PropsWithChildren } from 'react';

type TimelineCardMainProps = {
  className?: string;
} & ComponentProps<'main'>;

export function TimelineCardMain({
  className,
  children,
  ...rest
}: PropsWithChildren<TimelineCardMainProps>) {
  return (
    <main
      className={cn(
        'flex flex-col gap-4 px-6 pt-4 mt-4 border-t-1 border-gray-100',
        className,
      )}
      {...rest}
    >
      {children}
    </main>
  );
}
