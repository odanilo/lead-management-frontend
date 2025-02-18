import { PropsWithChildren } from 'react';

export function Container({ children }: Readonly<PropsWithChildren>) {
  return <div className="max-w-2xl mx-auto">{children}</div>;
}
