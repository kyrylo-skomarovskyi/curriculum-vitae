import { createBrowserRouter, Outlet } from 'react-router';
import { AsideLayout } from '@/components/aside-layout';
import { ROUTE_PATH } from '../constants/route-paths.ts';
import { AuthRoute } from './auth-route.tsx';
import { ProtectedRoute } from './protected-route.tsx';
import {
  CreateProjectPage,
  EditProjectPage,
  HomePage,
  LoginPage,
  ProjectPage,
  ProjectsPage
} from './pages.tsx';

const router = createBrowserRouter([
  {
    path: ROUTE_PATH.login,
    element: (
      <AuthRoute redirectTo={ROUTE_PATH.home}>
        <LoginPage />
      </AuthRoute>
    ),
  },
  {
    element: (
      <AsideLayout>
        <Outlet />
      </AsideLayout>
    ),
    children: [
      {
        path: ROUTE_PATH.home,
        element: <HomePage />,
        index: true,
      },
      {
        path: ROUTE_PATH.projects,
        element: <ProjectsPage />,
      },
      {
        path: ROUTE_PATH.project,
        element: <ProjectPage />,
      },
      {
        path: ROUTE_PATH.createProject,
        element: (
          <ProtectedRoute redirectTo={ROUTE_PATH.projects}>
            <CreateProjectPage />
          </ProtectedRoute>
        ),
      },
      {
        path: ROUTE_PATH.editProject,
        element: (
          <ProtectedRoute redirectTo={ROUTE_PATH.projects}>
            <EditProjectPage />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default router;
