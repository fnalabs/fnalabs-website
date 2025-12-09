import pkg from '../package.json'

export const ASSETS = 'fnalabs_assets'
export const HIVE_MFE = 'hive_website'
export const MF_MFE = 'module_federation'

export interface IConfig {
  name: string
  remotes: {
    [key: string]: {
      name: string
      entry: string
    }
  }
}
// TODO: make this config driven via env variables
const CONFIG: IConfig = {
  name: pkg.name,
  remotes: {
    [ASSETS]: {
      name: ASSETS,
      entry: `http://localhost:2999/assets/mf-manifest.json`,
    },
    [HIVE_MFE]: {
      name: HIVE_MFE,
      entry: `http://localhost:3001/hive/mf-manifest.json`,
    },
    [MF_MFE]: {
      name: MF_MFE,
      entry: `http://localhost:3002/federation/mf-manifest.json`,
    },
  },
}
export default CONFIG
