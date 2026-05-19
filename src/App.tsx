import * as pkg from '../package.json' with { type: 'json' }
import React, { type FC, lazy, Suspense } from 'react'
import ReactDom from 'react-dom'
import { Await, type RouteObject } from 'react-router'
import { getInstance, registerRemotes, registerShared, preloadRemote } from '@module-federation/enhanced/runtime'
import Router from './Router'
import { remoteLoading } from './remotes'
import useRoutes from './hooks/useRoutes'
import cfg from './config'

getInstance()
registerRemotes(Object.entries(cfg.remotes).map(([name, remote]) => ({
  name,
  entry: remote.entry,
})))
registerShared({
  react: {
    version: pkg.dependencies['react'],
    scope: "default",
    lib: () => React,
    shareConfig: {
      singleton: true,
      requiredVersion: pkg.dependencies['react'],
    },
  },
  "react-dom": {
    version: pkg.dependencies['react-dom'],
    scope: "default",
    lib: () => ReactDom,
    shareConfig: {
      singleton: true,
      requiredVersion: pkg.dependencies['react-dom'],
    },
  },
  "react-router": {
    version: pkg.dependencies['react-router'],
    scope: "default",
    shareConfig: {
      singleton: true,
      requiredVersion: pkg.dependencies['react-router'],
    },
  },
})
preloadRemote(Object.keys(cfg.remotes).map(name => ({ nameOrAlias: name })))

const Loading = lazy(remoteLoading)

const App: FC = () => {
  const appRoutes = useRoutes()

  return (
    <Suspense fallback={<Loading />}>
      <Await resolve={appRoutes}>
        {(resolvedRoutes) => <Router routes={resolvedRoutes as RouteObject[]} />}
      </Await>
    </Suspense>
  )
}
export default App
