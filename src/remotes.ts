import type { RouteObject } from 'react-router'

import type { RemoteComponent } from '../@mf-types/fnalabs_assets/compiled-types/types'

import type { IHiveIO } from '../@mf-types/fnalabs_assets/brands/HiveIO'
import type { IModuleFederation } from '../@mf-types/fnalabs_assets/brands/ModuleFederation'

import type { IBlock } from '../@mf-types/fnalabs_assets/Block'
import type { IBox } from '../@mf-types/fnalabs_assets/Box'
import type { ICard } from '../@mf-types/fnalabs_assets/Card'
import type { ICell } from '../@mf-types/fnalabs_assets/Cell'
import type { IColumn } from '../@mf-types/fnalabs_assets/Column'
import type { IColumns } from '../@mf-types/fnalabs_assets/Columns'
import type { IContainer } from '../@mf-types/fnalabs_assets/Container'
import type { IGrid } from '../@mf-types/fnalabs_assets/Grid'
import type { IHero } from '../@mf-types/fnalabs_assets/Hero'
import type { IIcon } from '../@mf-types/fnalabs_assets/Icon'
import type { IImage } from '../@mf-types/fnalabs_assets/Image'
import type { IMedia } from '../@mf-types/fnalabs_assets/Media'
import type { IMenu } from '../@mf-types/fnalabs_assets/Menu'
import type { IProgressBar } from '../@mf-types/fnalabs_assets/ProgressBar'
import type { ISection } from '../@mf-types/fnalabs_assets/Section'

import type { IAnalyticsToast } from '../@mf-types/fnalabs_assets/AnalyticsToast'
import type { ILoading } from '../@mf-types/fnalabs_assets/Loading'
import type { IServiceWorker } from '../@mf-types/fnalabs_assets/ServiceWorker'
import type { IAppLayout } from '../@mf-types/fnalabs_assets/AppLayout'
import type { IGlobalLayout } from '../@mf-types/fnalabs_assets/GlobalLayout'

import type { IConsentProvider } from '../@mf-types/fnalabs_assets/ConsentContext'

import { loadRemote } from '@module-federation/enhanced/runtime'
import { ASSETS, HIVE_MFE, MF_MFE } from './config'

interface IRemoteRoutes {
  default: RouteObject
}

// Brand Icon remote components
export const remoteIconHiveIO = () => loadRemote(`${ASSETS}/brands/HiveIO`) as RemoteComponent<IHiveIO>
export const remoteIconMF = () => loadRemote(`${ASSETS}/brands/ModuleFederation`) as RemoteComponent<IModuleFederation>

// Bulma remote components
export const remoteBlock = () => loadRemote(`${ASSETS}/Block`) as RemoteComponent<IBlock>
export const remoteBox = () => loadRemote(`${ASSETS}/Box`) as RemoteComponent<IBox>
export const remoteCard = () => loadRemote(`${ASSETS}/Card`) as RemoteComponent<ICard>
export const remoteCell = () => loadRemote(`${ASSETS}/Cell`) as RemoteComponent<ICell>
export const remoteColumn = () => loadRemote(`${ASSETS}/Column`) as RemoteComponent<IColumn>
export const remoteColumns = () => loadRemote(`${ASSETS}/Columns`) as RemoteComponent<IColumns>
export const remoteContainer = () =>
  loadRemote(`${ASSETS}/Container`) as RemoteComponent<IContainer>
export const remoteGrid = () => loadRemote(`${ASSETS}/Grid`) as RemoteComponent<IGrid>
export const remoteHero = () => loadRemote(`${ASSETS}/Hero`) as RemoteComponent<IHero>
export const remoteIcon = () => loadRemote(`${ASSETS}/Icon`) as RemoteComponent<IIcon>
export const remoteImage = () => loadRemote(`${ASSETS}/Image`) as RemoteComponent<IImage>
export const remoteMedia = () => loadRemote(`${ASSETS}/Media`) as RemoteComponent<IMedia>
export const remoteMenu = () => loadRemote(`${ASSETS}/Menu`) as RemoteComponent<IMenu>
export const remoteProgressBar = () => loadRemote(`${ASSETS}/ProgressBar`) as RemoteComponent<IProgressBar>
export const remoteSection = () => loadRemote(`${ASSETS}/Section`) as RemoteComponent<ISection>

// Custom remote components
export const remoteAnalyticsToast = () => loadRemote(`${ASSETS}/AnalyticsToast`) as RemoteComponent<IAnalyticsToast>
export const remoteLoading = () => loadRemote(`${ASSETS}/Loading`) as RemoteComponent<ILoading>
export const remoteServiceWorker = () => loadRemote(`${ASSETS}/ServiceWorker`) as RemoteComponent<IServiceWorker>
export const remoteAppLayout = () => loadRemote(`${ASSETS}/AppLayout`) as RemoteComponent<IAppLayout>
export const remoteGlobalLayout = () => loadRemote(`${ASSETS}/GlobalLayout`) as RemoteComponent<IGlobalLayout>

// MFE remote dependencies
export const remoteHiveRoutes = () => loadRemote<IRemoteRoutes>(`${HIVE_MFE}/Routes`).then(m => m?.default) as Promise<RouteObject>
export const remoteMFRoutes = () => loadRemote<IRemoteRoutes>(`${MF_MFE}/Routes`).then(m => m?.default) as Promise<RouteObject>

// Contexts
export const remoteConsentContext = () => loadRemote(`${ASSETS}/ConsentContext`) as RemoteComponent<IConsentProvider>

export const MFE_LIST = [
  remoteHiveRoutes,
  remoteMFRoutes,
]