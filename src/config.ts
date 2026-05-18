import pkg from '../package.json'

export const HOST = process.env.HOST || 'http://localhost:3000'
export const ROUTE = process.env.ROUTE || '/'

export const NODE_ENV = process.env.NODE_ENV || 'development'
export const IS_DEV = NODE_ENV === 'development'

// TODO: replace with actual GA ID
export const GA_ID = IS_DEV ? 'G-K1NBZN6NJH' : 'G-XXXXXXX'
export const SW_ROUTE = '/sw.js'

export const ASSETS = 'fnalabs_assets'
export const HIVE_MFE = 'hive_website'
export const MF_MFE = 'module_federation'
export const FEDERATION_HOSTS = IS_DEV
  ? {
      [ASSETS]: 'http://localhost:2999',
      [HIVE_MFE]: 'http://localhost:3001',
      [MF_MFE]: 'http://localhost:3002',
    }
  : {
      [ASSETS]: 'https://fnalabs.github.io/fnalabs-assets',
      [HIVE_MFE]: 'https://fnalabs.github.io/hive-website',
      [MF_MFE]: 'https://fnalabs.github.io/module-federation',
    }

export interface IConfig {
  name: string
  remotes: {
    [key: string]: {
      name: string
      entry: string
      serviceWorker?: string
    }
  }
}
const CONFIG: IConfig = {
  name: pkg.name,
  remotes: {
    [ASSETS]: {
      name: ASSETS,
      entry: `${FEDERATION_HOSTS[ASSETS]}/assets/mf-manifest.json`,
      serviceWorker: `${FEDERATION_HOSTS[ASSETS]}/assets/sw.js`,
    },
    [HIVE_MFE]: {
      name: HIVE_MFE,
      entry: `${FEDERATION_HOSTS[HIVE_MFE]}/hive/mf-manifest.json`,
      serviceWorker: `${FEDERATION_HOSTS[HIVE_MFE]}/hive/sw.js`,
    },
    [MF_MFE]: {
      name: MF_MFE,
      entry: `${FEDERATION_HOSTS[MF_MFE]}/federation/mf-manifest.json`,
      serviceWorker: `${FEDERATION_HOSTS[MF_MFE]}/federation/sw.js`,
    },
  },
}
export default CONFIG
