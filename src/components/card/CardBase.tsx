import { cn } from '@/lib/utils';
import { ComponentProps, PropsWithChildren } from 'react';

type CardBaseProps = {
  className: string;
} & ComponentProps<'article'>;

export function CardBase({
  children,
  className,
  ...rest
}: Readonly<PropsWithChildren<CardBaseProps>>) {
  return (
    <article
      className={cn('bg-white border border-gray-200 shadow', className)}
      {...rest}
    >
      {children}
    </article>
  );
}
