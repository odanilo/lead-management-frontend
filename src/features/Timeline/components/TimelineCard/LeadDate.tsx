type LeadDateProps = {
  className?: string;
  dateTime: string;
  formattedDate: string;
};

export function LeadDate({
  dateTime,
  formattedDate,
  className,
}: Readonly<LeadDateProps>) {
  return (
    <time className={className} dateTime={dateTime}>
      {formattedDate}
    </time>
  );
}
