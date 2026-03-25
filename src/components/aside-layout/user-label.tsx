import { Skeleton } from '@/components/ui/skeleton.tsx';
import { useAuth } from '@/contexts/auth-context';

function UserLabelContent() {
  const { loading, user } = useAuth();

  if (loading) {
    return (
      <>
        <Skeleton className="h-4" />
        <Skeleton className="mt-0.5 h-3.5 w-2/3" />
      </>
    );
  }

  return (
    <>
      <span className="truncate font-medium">{user?.displayName ?? 'Unknown'}</span>
      <span className="text-muted-foreground min-h-4 truncate text-xs">{user?.email}</span>
    </>
  );
}

export function UserLabel() {
  return (
    <div className="grid flex-1 text-left text-sm leading-tight">
      <UserLabelContent />
    </div>
  );
}
