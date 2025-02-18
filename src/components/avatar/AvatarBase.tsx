import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

type AvatarBaseProps = {
  src: string;
  fallback: string;
};

export function AvatarBase({ src, fallback }: Readonly<AvatarBaseProps>) {
  return (
    <Avatar className="w-12 h-12 text-xl">
      <AvatarImage src={src} />
      <AvatarFallback className="bg-primary text-white font-semibold">
        {fallback}
      </AvatarFallback>
    </Avatar>
  );
}
