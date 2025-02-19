import { cn } from '@/lib/utils';
import { ComponentProps, PropsWithChildren } from 'react';

type LeadNameProps = {
  className?: string;
} & ComponentProps<'h2'>;

export function LeadName({
  children,
  className,
  ...rest
}: PropsWithChildren<LeadNameProps>) {
  return (
    <h2
      id="lead-name"
      className={cn('text-black font-semibold', className)}
      {...rest}
    >
      {children}
    </h2>
  );
}
