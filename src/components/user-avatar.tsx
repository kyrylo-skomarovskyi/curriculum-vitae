import { HatGlasses } from 'lucide-react';
import { AvatarFallback, AvatarImage } from '@/components/ui/avatar.tsx';
import { Skeleton } from '@/components/ui/skeleton.tsx';
import { useAuth } from '@/contexts/auth-context';
import { getInitials } from '@/utils/get-initials.ts';

type UserData = {
  name?: string | null;
  src?: string | null;
};

export default function UserAvatar() {
  const { loading, user } = useAuth();

  if (loading) {
    return <Skeleton className="h-full w-full rounded-full" />;
  }

  if (!user) {
    return (
      <AvatarFallback>
        <HatGlasses />
      </AvatarFallback>
    );
  }

  const userData = user.providerData.reduce<UserData>((acc, userInfo) => {
    acc.name = acc.name || userInfo.displayName;
    acc.src = acc.src || userInfo.photoURL;

    return acc;
  }, {});
  const src = userData.src ?? '';
  const alt = userData.name ?? '';
  const initial = getInitials(alt);

  return (
    <>
      <AvatarImage src={src} alt={alt} />
      <AvatarFallback className="rounded-lg">{initial}</AvatarFallback>
    </>
  );
}
