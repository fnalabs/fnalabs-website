/* eslint-env serviceworker */
/* global workbox */

// constants
const urls = [
  { url: '.' },
  { url: '/projects' },
  { url: '/about' },
  { url: '/support' },
  { url: '/cookie' },
  { url: '/privacy' }
]
const precacheManifest = !self.__precacheManifest
  ? urls
  : self.__precacheManifest.reduce((ret, val) => {
    if (val.revision) for (const url of urls) url.revision = val.revision
    ret.push(val)
    return ret
  }, urls)

// event handlers
self.addEventListener('install', (event) => self.skipWaiting())

// config
workbox.core.setCacheNameDetails({
  prefix: 'fnalabs'
})
workbox.googleAnalytics.initialize({
  parameterOverrides: {
    cd1: 'offline'
  }
})

// precache and routing
workbox.precaching.precacheAndRoute(precacheManifest)
workbox.precaching.cleanupOutdatedCaches()

workbox.routing.registerRoute(
  /.*google-analytics\.com/,
  new workbox.strategies.CacheFirst({
    cacheName: 'fnalabs-analytics',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 60,
        maxAgeSeconds: 2592000 // 30 Days
      })
    ]
  })
)
workbox.routing.registerRoute(
  /\.(?:png|jpg|jpeg|svg|gif)$/,
  new workbox.strategies.CacheFirst({
    cacheName: 'fnalabs-images',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 60,
        maxAgeSeconds: 2592000 // 30 Days
      })
    ]
  })
)
workbox.routing.registerRoute(
  new RegExp('^https://fnalabs\\.github\\.io/fnalabs-assets/assets/'),
  new workbox.strategies.CacheFirst({
    cacheName: 'fnalabs-images',
    plugins: [
      new workbox.cacheableResponse.Plugin({
        statuses: [0, 200]
      }),
      new workbox.expiration.Plugin({
        maxEntries: 60,
        maxAgeSeconds: 2592000 // 30 Days
      })
    ]
  })
)