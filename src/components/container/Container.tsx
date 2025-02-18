import { cn } from '@/lib/utils';
import { ComponentProps, PropsWithChildren } from 'react';

type ContainerProps = {
  className: string;
} & ComponentProps<'div'>;

export function Container({
  children,
  className,
  ...rest
}: Readonly<PropsWithChildren<ContainerProps>>) {
  return (
    <div className={cn('max-w-2xl mx-auto', className)} {...rest}>
      {children}
    </div>
  );
}
