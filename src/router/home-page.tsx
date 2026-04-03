import { AlertCircleIcon } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert.tsx';
import { useProfileQuery } from '@/hooks/use-profile-query.ts';

export default function HomePage() {
  const { isLoading, error, data } = useProfileQuery();

  if (isLoading) {
    return (
      <div className="space-y-4 p-6">
        <Skeleton className="h-4 w-64" />
        <Skeleton className="h-4 w-64" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-3/4" />
      </div>
    );
  }

  if (error) {
    return (
      <Alert variant="destructive" className="max-w-md">
        <AlertCircleIcon />
        <AlertTitle>Profile</AlertTitle>
        <AlertDescription>{error.message}</AlertDescription>
      </Alert>
    );
  }

  if (!data) {
    return (
      <Alert className="max-w-md">
        <AlertCircleIcon />
        <AlertTitle>Profile</AlertTitle>
        <AlertDescription>No profile found.</AlertDescription>
      </Alert>
    );
  }

  return (
    <div className="px-6">
      <h1>{data.fullName}</h1>
      <h2>{data.title}</h2>
      <p>{data.summary}</p>
    </div>
  );
}
