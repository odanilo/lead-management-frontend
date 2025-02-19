import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

type AvatarBaseProps = {
  src: string;
  alt: string;
  fallback: string;
};

export function AvatarBase({ alt, fallback, src }: Readonly<AvatarBaseProps>) {
  return (
    <Avatar className="w-12 h-12 text-xl">
      <AvatarImage alt={alt} src={src} />
      <AvatarFallback className="bg-primary text-white font-semibold">
        {fallback}
      </AvatarFallback>
    </Avatar>
  );
}
