import { cn } from '@/lib/utils';

type LeadPriceProps = {
  className?: string;
  price: string;
  label: string;
};

export function LeadPrice({
  label,
  price,
  className,
}: Readonly<LeadPriceProps>) {
  return (
    <div className={cn('text-lg', className)}>
      <p>
        <strong>{price}</strong> {label}
      </p>
    </div>
  );
}
