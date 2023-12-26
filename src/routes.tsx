import {
  DeliveryData,
  Home,
  MyBasket,
  OrderPlaced,
  PaymentMethods,
  AccountInfo,
  Workspace,
  MyPersonalInformation,
  MyPersonalInformationActive,
  MyInvoiceInformation,
  MyInvoiceInformationActive,
  MyAddresses,
  MyAddressInformation,
  MyAddressInformationActive,
  NewAddress,
} from '@/views';

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
  'My invoice information': {
    path: '/my-invoice-information',
    element: <MyInvoiceInformation />,
  },
  'My invoice information active': {
    path: '/my-invoice-information-active',
    element: <MyInvoiceInformationActive />,
  },
  'My addresses': {
    path: '/my-addresses',
    element: <MyAddresses />,
  },
  'My address information': {
    path: '/address-information',
    element: <MyAddressInformation />,
  },
  'My address information active': {
    path: '/address-information-active',
    element: <MyAddressInformationActive />,
  },
  'New address': {
    path: '/new-address',
    element: <NewAddress />,
  },
  Workspace: {
    path: '/workspace',
    element: <Workspace />,
  },
});
