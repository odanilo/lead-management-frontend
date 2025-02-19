import { CardBase } from '@/components/card/CardBase';
import { WarningIcon } from '@/components/icons/WarningIcon';
import { cn } from '@/lib/utils';

type TimelineErrorProps = {
  className?: string;
};

export function TimelineError({ className }: Readonly<TimelineErrorProps>) {
  return (
    <CardBase
      className={cn(
        'p-8 mt-6 gap-2 flex flex-col justify-center items-center text-center text-gray-700',
        className,
      )}
    >
      <WarningIcon className="size-32 text-gray-400" />

      <h3 className="text-2xl font-semibold">
        Ocorreu um erro para encontrar os leads
      </h3>

      <p>Por favor tente novamente mais tarde.</p>
    </CardBase>
  );
}
