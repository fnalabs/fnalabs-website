import type { RouteObject } from 'react-router'

import React, { type FC, useMemo } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router'
import GlobalLayout from './components/GlobalLayout'

export interface IRouter {
  routes: RouteObject[]
}
const Router: FC<IRouter> = ({ routes }) => {
  const router = useMemo(() => createBrowserRouter([
    {
      element: <GlobalLayout />,
      children: routes,
    },
  ]), [routes])

  return <RouterProvider router={router} />
}
export default Router
