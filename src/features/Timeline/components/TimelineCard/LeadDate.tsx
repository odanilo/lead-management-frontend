import { ComponentProps } from 'react';

type LeadDateProps = {
  className?: string;
  dateTime: string;
  formattedDate: string;
} & ComponentProps<'time'>;

export function LeadDate({
  dateTime,
  formattedDate,
  className,
  ...rest
}: Readonly<LeadDateProps>) {
  return (
    <time className={className} dateTime={dateTime} {...rest}>
      {formattedDate}
    </time>
  );
}
