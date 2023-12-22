import { Home, MyBasket, Workspace } from '@/views';

export const routes = Object.freeze({
  Home: {
    path: '/',
    element: <Home />,
  },
  MyBasket: {
    path: '/my-basket',
    element: <MyBasket />,
  },
  Workspace: {
    path: '/workspace',
    element: <Workspace />,
  },
});
