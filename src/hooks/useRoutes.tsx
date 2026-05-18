import type { RouteObject } from 'react-router'

import { useEffect, useState } from 'react'
import { MFE_LIST } from '../remotes'
import { default as hostRoutes } from '../routes'

function useRoutes() {
  const [routes, setRoutes] = useState<RouteObject[]>([])
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    Promise
      .all(MFE_LIST.map(loadMFE => loadMFE()))
      .then(remoteRoutes => {
        setRoutes([hostRoutes, ...remoteRoutes])
      })
      .catch(err => {
        console.error('Error loading remote routes:', err)
        setError(err)
      })
  }, [])

  return new Promise((resolve, reject) => {
    if (routes.length !== 0) {
      resolve(routes)
    }
    if (error) {
      reject(error)
    }
  })
}
export default useRoutes
