import { cn } from '@/lib/utils';
import { PropsWithChildren } from 'react';

type LeadPriceProps = {
  className?: string;
  label?: string;
};

export function LeadPrice({
  label = 'Lead invitation',
  className,
  children,
}: PropsWithChildren<LeadPriceProps>) {
  return (
    <div className={cn('text-lg', className)} data-cy="TimelineCard_Lead_Price">
      <p>
        <strong>{children}</strong> {label}
      </p>
    </div>
  );
}
