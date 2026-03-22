import { type PropsWithChildren } from 'react';
import { Navigate } from 'react-router';
import { useAuth } from '../contexts/auth-context.tsx';

type ProtectedRouteProps = PropsWithChildren<{
  redirectTo: string;
}>;

export function ProtectedRoute({ children, redirectTo }: ProtectedRouteProps) {
  const { user, loading } = useAuth();

  if (loading) {
    return null;
  }

  if (!user) {
    return <Navigate to={redirectTo} replace />;
  }

  return children;
}
