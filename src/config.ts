import pkg from '../package.json'

export const NODE_ENV = process.env.NODE_ENV || 'development'
export const ROUTE = process.env.ROUTE || '/'
export const HOST = process.env.HOST || 'http://localhost:3000'

// TODO: replace with actual GA ID
export const GA_ID = NODE_ENV === 'development' ? 'G-K1NBZN6NJH' : 'G-XXXXXXX'

export const ASSETS = 'fnalabs_assets'
export const HIVE_MFE = 'hive_website'
export const MF_MFE = 'module_federation'

export const FEDERATION_HOSTS = NODE_ENV === 'development'
  ? {
      [ASSETS]: 'http://localhost:2999',
      [HIVE_MFE]: 'http://localhost:3001',
      [MF_MFE]: 'http://localhost:3002',
    }
  : {}

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
    },
    [MF_MFE]: {
      name: MF_MFE,
      entry: `${FEDERATION_HOSTS[MF_MFE]}/federation/mf-manifest.json`,
    },
  },
}
export default CONFIG
