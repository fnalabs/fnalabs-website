/* eslint-env serviceworker */
import { setCacheNameDetails } from 'workbox-core'
import { precacheAndRoute } from 'workbox-precaching'
import * as pkg from '../package.json'
import cfg, { ASSETS, HIVE_MFE, MF_MFE } from './config'

// import cached service worker from assets MFE
// @ts-expect-error skipping this check
self.importScripts(cfg.remotes[ASSETS].serviceWorker)
// @ts-expect-error skipping this check
self.importScripts(cfg.remotes[HIVE_MFE].serviceWorker)
// @ts-expect-error skipping this check
self.importScripts(cfg.remotes[MF_MFE].serviceWorker)
// @ts-expect-error skipping this check
self.__WB_HOST_MANIFEST = self.__WB_MANIFEST

// event handlers
// @ts-expect-error skipping this check
self.addEventListener('install', () => self.skipWaiting())

// config
setCacheNameDetails({
  prefix: pkg.name,
})

// precache and routing
precacheAndRoute([
  // @ts-expect-error skipping this check
  ...self.__WB_HOST_MANIFEST,
  // @ts-expect-error skipping this check
  ...self.__WB_ASSETS_MANIFEST,
  // @ts-expect-error skipping this check
  ...self.__WB_HIVE_MFE_MANIFEST,
  // @ts-expect-error skipping this check
  ...self.__WB_MF_MFE_MANIFEST,
])