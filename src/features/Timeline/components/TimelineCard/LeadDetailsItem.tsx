import { cn } from '@/lib/utils';
import { ComponentProps, PropsWithChildren } from 'react';

type LeadDetailsProps = {
  className?: string;
} & ComponentProps<'li'>;

export function LeadDetailsItem({
  children,
  className,
  ...rest
}: PropsWithChildren<LeadDetailsProps>) {
  return (
    <li className={cn('gap-1 flex items-center', className)} {...rest}>
      {children}
    </li>
  );
}
