import { Home, Workspace } from '@/views';

export const routes = Object.freeze({
  Home: {
    path: '/',
    element: <Home />,
  },
  Workspace: {
    path: '/workspace',
    element: <Workspace />,
  },
});
