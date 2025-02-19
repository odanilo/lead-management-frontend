import { cn } from '@/lib/utils';
import { ComponentProps, PropsWithChildren } from 'react';

type LeadProfileProps = {
  className?: string;
} & ComponentProps<'div'>;

export function LeadProfile({
  children,
  className,
  ...rest
}: PropsWithChildren<LeadProfileProps>) {
  return (
    <div
      className={cn('px-6 flex gap-4 items-center leading-tight', className)}
      {...rest}
    >
      {children}
    </div>
  );
}
