import { PropsWithChildren } from 'react';

type TimelineCardActionsProps = {
  className?: string;
};

export function TimelineCardActions({
  children,
  className,
}: PropsWithChildren<TimelineCardActionsProps>) {
  return <div className={className}>{children}</div>;
}
