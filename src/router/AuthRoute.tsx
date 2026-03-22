import { type PropsWithChildren } from 'react'
import { Navigate } from 'react-router'
import { useAuth } from '../contexts/AuthContext.tsx'

type AuthRouteProps = PropsWithChildren<{
  redirectTo: string
}>

export function AuthRoute({ children, redirectTo }: AuthRouteProps) {
  const { user, loading } = useAuth()

  if (loading) {
    return null
  }

  if (user) {
    return <Navigate to={redirectTo} replace />
  }

  return children
}
