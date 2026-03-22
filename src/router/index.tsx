import { createBrowserRouter, Outlet } from 'react-router';
import { ROUTE_PATH } from '../constants/route-paths.ts';
import { AuthRoute } from './auth-route.tsx';
import { ProtectedRoute } from './protected-route.tsx';

const router = createBrowserRouter([
  {
    path: ROUTE_PATH.login,
    element: (
      <AuthRoute redirectTo={ROUTE_PATH.home}>
        <div>Login Page</div>
      </AuthRoute>
    ),
  },
  {
    element: (
      <div>
        <div>Layout</div>

        <Outlet />
      </div>
    ),
    children: [
      {
        path: ROUTE_PATH.home,
        element: <div>Home Page</div>,
        index: true,
      },
      {
        path: ROUTE_PATH.projects,
        element: <div>Projects Page</div>,
      },
      {
        path: ROUTE_PATH.project,
        element: <div>Project Page</div>,
      },
      {
        path: ROUTE_PATH.createProject,
        element: (
          <ProtectedRoute redirectTo={ROUTE_PATH.projects}>
            <div>Create Project Page</div>
          </ProtectedRoute>
        ),
      },
      {
        path: ROUTE_PATH.editProject,
        element: (
          <ProtectedRoute redirectTo={ROUTE_PATH.projects}>
            <div>Edit Project Page</div>
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default router;
