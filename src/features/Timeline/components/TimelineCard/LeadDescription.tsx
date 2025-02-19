import { PropsWithChildren } from 'react';

export function LeadDescription({ children }: Readonly<PropsWithChildren>) {
  return (
    <section aria-labelledby="lead-description">
      <h3 id="lead-description" className="sr-only">
        Lead Description
      </h3>

      <p>{children}</p>
    </section>
  );
}
