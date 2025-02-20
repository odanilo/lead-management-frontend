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
    <div className={cn('max-w-3xl mx-auto px-4', className)} {...rest}>
      {children}
    </div>
  );
}
