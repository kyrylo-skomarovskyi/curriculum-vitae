import { lazy, Suspense } from 'react';
import { ROUTE_PATH } from '@/constants/route-paths.ts';

const LoginPageLazy = lazy(() => import('./login-page.tsx'));
const HomePageLazy = lazy(() => import('./home-page.tsx'));
const ProjectsPageLazy = lazy(() => import('./projects-page.tsx'));
const ProjectPageLazy = lazy(() => import('./project-page.tsx'));
const CreateProjectPageLazy = lazy(() => import('./create-project-page.tsx'));
const EditProjectPageLazy = lazy(() => import('./edit-project-page.tsx'));

export function LoginPage() {
  return (
    <Suspense key={ROUTE_PATH.login} fallback={null}>
      <LoginPageLazy />
    </Suspense>
  );
}
export function HomePage() {
  return (
    <Suspense key={ROUTE_PATH.home} fallback={null}>
      <HomePageLazy />
    </Suspense>
  );
}
export function ProjectsPage() {
  return (
    <Suspense key={ROUTE_PATH.projects} fallback={null}>
      <ProjectsPageLazy />
    </Suspense>
  );
}
export function ProjectPage() {
  return (
    <Suspense key={ROUTE_PATH.project} fallback={null}>
      <ProjectPageLazy />
    </Suspense>
  );
}
export function CreateProjectPage() {
  return (
    <Suspense key={ROUTE_PATH.createProject} fallback={null}>
      <CreateProjectPageLazy />
    </Suspense>
  );
}
export function EditProjectPage() {
  return (
    <Suspense key={ROUTE_PATH.editProject} fallback={null}>
      <EditProjectPageLazy />
    </Suspense>
  );
}
