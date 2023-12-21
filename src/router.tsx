import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home, Workspace } from '@/views'

export const routes = Object.freeze({
  Home: {
    path: '/',
    element: <Home />
  },
  Workspace: {
    path: '/workspace',
    element: <Workspace />
  }
})

export function Router() {
  return <BrowserRouter>
    <Routes>
      {
        Object.values(routes).map(({ element, path }, key) => <Route key={key} path={path} element={element} />)
      }
    </Routes>
  </BrowserRouter>
}