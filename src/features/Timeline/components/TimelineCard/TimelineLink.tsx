import { cn } from '@/lib/utils';
import { ComponentProps, PropsWithChildren } from 'react';

type TimelineLinkProps = {
  className?: string;
} & ComponentProps<'a'>;

export function TimelineLink({
  className,
  children,
  ...rest
}: PropsWithChildren<TimelineLinkProps>) {
  return (
    <a className={cn('font-bold text-primary hover:underline', className)} {...rest}>
      {children}
    </a>
  );
}
