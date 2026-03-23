import { lazy } from 'react';

export const LoginPage = lazy(() => import('./login-page.tsx'));
export const HomePage = lazy(() => import('./home-page.tsx'));
export const ProjectsPage = lazy(() => import('./projects-page.tsx'));
export const ProjectPage = lazy(() => import('./project-page.tsx'));
export const CreateProjectPage = lazy(() => import('./create-project-page.tsx'));
export const EditProjectPage = lazy(() => import('./edit-project-page.tsx'));
