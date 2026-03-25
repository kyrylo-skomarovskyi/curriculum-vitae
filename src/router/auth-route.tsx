import { type PropsWithChildren } from 'react';
import { Navigate, useLocation } from 'react-router';
import { useAuth } from '@/contexts/auth-context';

type AuthRouteProps = PropsWithChildren<{
  redirectTo: string;
}>;

export function AuthRoute({ children, redirectTo }: AuthRouteProps) {
  const { user, loading } = useAuth();
  const location = useLocation();
  // TODO: implement zod state validation
  const redirect = location.state?.from || redirectTo;

  if (loading) {
    return null;
  }

  if (user) {
    return <Navigate to={redirect} replace />;
  }

  return children;
}
