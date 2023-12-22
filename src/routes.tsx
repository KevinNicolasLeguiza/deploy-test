import { DeliveryData, Home, MyBasket, PaymentMethods, Workspace } from '@/views';

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
  'Payment methods': {
    path: '/payment-methods',
    element: <PaymentMethods />,
  },
  Workspace: {
    path: '/workspace',
    element: <Workspace />,
  },
});
