const PROJECTS = '/projects';
const PROJECT = `${PROJECTS}/:projectId`;

export const ROUTE_PATH = {
  home: '/',
  login: '/login',
  projects: PROJECTS,
  createProject: `${PROJECTS}/new`,
  project: PROJECT,
  editProject: `${PROJECT}/edit`,
} as const;
