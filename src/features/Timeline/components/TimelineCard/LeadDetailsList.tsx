import { cn } from '@/lib/utils';
import { ComponentProps, PropsWithChildren } from 'react';

type LeadDetailsListProps = {
  className?: string;
} & ComponentProps<'nav'>;

export function LeadDetailsList({
  children,
  className,
  ...rest
}: PropsWithChildren<LeadDetailsListProps>) {
  return (
    <nav
      className={cn(
        'px-6 pt-4 mt-4 border-t-1 text-lg border-gray-100',
        className,
      )}
      {...rest}
    >
      <ul className="flex gap-6 flex-wrap">{children}</ul>
    </nav>
  );
}
