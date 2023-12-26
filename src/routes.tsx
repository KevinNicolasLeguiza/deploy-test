import { DeliveryData, Home, MyBasket, OrderPlaced, PaymentMethods, AccountInfo, Workspace, MyPersonalInformation, MyPersonalInformationActive } from '@/views';

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
  'Order placed': {
    path: '/order-placed',
    element: <OrderPlaced />,
  },
  'My account': {
    path: '/my-account',
    element: <AccountInfo />,
  },
  'My personal information': {
    path: '/personal-information',
    element: <MyPersonalInformation />,
  },
  'My personal information active': {
    path: '/personal-information-active',
    element: <MyPersonalInformationActive />,
  },
  Workspace: {
    path: '/workspace',
    element: <Workspace />,
  },
});
