import type { FC } from 'react'

import { lazy } from 'react'
import { createBrowserRouter, Link } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import { getInstance, registerRemotes, preloadRemote } from '@module-federation/enhanced/runtime'
import { remoteAppLayout, remoteGlobalLayout } from './remotes'
import cfg, { ASSETS } from './config'

import routes from './routes'

getInstance()
registerRemotes([
  {
    name: cfg.remotes[ASSETS].name,
    entry: cfg.remotes[ASSETS].entry,
    alias: cfg.remotes[ASSETS].alias,
  },
])

preloadRemote([{ nameOrAlias: ASSETS }])

const GlobalLayout = lazy(remoteGlobalLayout)
const AppLayout = lazy(remoteAppLayout)

const router = createBrowserRouter([
  {
    element: <GlobalLayout projectLinks={[]} policyLinks={[]} />,
    children: [
      routes,
      {
        element: (<AppLayout endLinks={[
          { href: '/projects', label: 'Projects' },
          { href: '/about', label: 'About' },
          { href: '/support', label: 'Support' },
        ]} color='warning' spaced />),
        children: [
          {
            path: '/hive',
            element: <p>Welcome to Hive<sup>io</sup>! <Link to="/">Home</Link></p>,
          },
        ],
      },
    ],
  },
])

const App: FC = () => (
  <RouterProvider router={router} />
)
export default App
