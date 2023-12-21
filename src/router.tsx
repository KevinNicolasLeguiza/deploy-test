import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { routes } from './routes';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {Object.values(routes).map(({ element, path }, key) => (
          <Route
            key={key}
            path={path}
            element={element}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}
