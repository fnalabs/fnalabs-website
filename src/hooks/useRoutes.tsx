import type { RouteObject } from 'react-router'

import { useEffect, useState } from 'react'
import { MFE_LIST } from '../remotes'
import { default as hostRoutes } from '../routes'

function useRoutes() {
  const [routes, setRoutes] = useState<RouteObject[]>([])

  useEffect(() => {
    Promise.all(MFE_LIST.map(loadMFE => loadMFE())).then(remoteRoutes => {
      setRoutes([hostRoutes, ...remoteRoutes])
    })
  }, [])

  return routes
}
export default useRoutes
