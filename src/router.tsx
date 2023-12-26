// import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { RouterProvider, createHashRouter } from 'react-router-dom';
import { routes } from './routes';

export function Router() {
  const router = createHashRouter(Object.values(routes));
  return (
    // <BrowserRouter basename={import.meta.env.BASE_URL}>
    //   <Routes>
    //     {Object.values(routes).map(({ element, path }, key) => (
    //       <Route
    //         key={key}
    //         path={path}
    //         element={element}
    //       />
    //     ))}
    //   </Routes>
    // </BrowserRouter>
    <RouterProvider router={router} />
  );
}
