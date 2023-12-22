import { DeliveryData, Home, MyBasket, Workspace } from '@/views';

export const routes = Object.freeze({
  Home: {
    path: '/',
    element: <Home />,
  },
  'My Basket': {
    path: '/my-basket',
    element: <MyBasket />,
  },
  'Delivery data': {
    path: '/delivery-data',
    element: <DeliveryData />,
  },
  Workspace: {
    path: '/workspace',
    element: <Workspace />,
  },
});
