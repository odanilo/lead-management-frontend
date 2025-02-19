import { ComponentProps, PropsWithChildren } from 'react';

type TimelineCardHeaderProps = {
  className: string;
} & ComponentProps<'header'>;

export function TimelineCardHeader({
  children,
  className,
  ...rest
}: PropsWithChildren<TimelineCardHeaderProps>) {
  return (
    <header className={className} {...rest}>
      {children}
    </header>
  );
}
