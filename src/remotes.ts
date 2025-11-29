import type { FC } from 'react'
import type { RouteObject } from 'react-router'

import type { RemoteComponent } from '@mf-types/fnalabs_assets/compiled-types/types'
import type { IBox } from '@mf-types/fnalabs_assets/Box'
import type { ICard } from '@mf-types/fnalabs_assets/Card'
import type { IColumn } from '@mf-types/fnalabs_assets/Column'
import type { IColumns } from '@mf-types/fnalabs_assets/Columns'
import type { IContainer } from '@mf-types/fnalabs_assets/Container'
import type { IHero } from '@mf-types/fnalabs_assets/Hero'
import type { IIcon } from '@mf-types/fnalabs_assets/Icon'
import type { IImage } from '@mf-types/fnalabs_assets/Image'
import type { IMedia } from '@mf-types/fnalabs_assets/Media'
import type { IMenu } from '@mf-types/fnalabs_assets/Menu'
import type { IProgressBar } from '@mf-types/fnalabs_assets/ProgressBar'
import type { ISection } from '@mf-types/fnalabs_assets/Section'

import type { IAppLayout } from '@mf-types/fnalabs_assets/AppLayout'
import type { IGlobalLayout } from '@mf-types/fnalabs_assets/GlobalLayout'
import type { ILoading } from '@mf-types/fnalabs_assets/Loading'

interface IRemoteRoutes {
  default: RouteObject
}

import { loadRemote } from '@module-federation/enhanced/runtime'
import { ASSETS, HIVE_MFE } from './config'

// Icon remote components
export const remoteIconEfficiency = () => loadRemote(`${ASSETS}/icons/Efficiency`) as RemoteComponent<FC>
export const remoteIconFemale = () => loadRemote(`${ASSETS}/icons/Female`) as RemoteComponent<FC>
export const remoteIconFlexibility = () => loadRemote(`${ASSETS}/icons/Flexibility`) as RemoteComponent<FC>
export const remoteIconHiveIO = () => loadRemote(`${ASSETS}/icons/HiveIO`) as RemoteComponent<FC>
export const remoteIconMale = () => loadRemote(`${ASSETS}/icons/Male`) as RemoteComponent<FC>
export const remoteIconPrivacy = () => loadRemote(`${ASSETS}/icons/Privacy`) as RemoteComponent<FC>
export const remoteIconQuality = () => loadRemote(`${ASSETS}/icons/Quality`) as RemoteComponent<FC>
export const remoteIconSuccinctness = () => loadRemote(`${ASSETS}/icons/Succinctness`) as RemoteComponent<FC>
export const remoteIconSupport = () => loadRemote(`${ASSETS}/icons/Support`) as RemoteComponent<FC>

// Bulma remote components
export const remoteBox = () => loadRemote(`${ASSETS}/Box`) as RemoteComponent<IBox>
export const remoteCard = () => loadRemote(`${ASSETS}/Card`) as RemoteComponent<ICard>
export const remoteColumn = () => loadRemote(`${ASSETS}/Column`) as RemoteComponent<IColumn>
export const remoteColumns = () => loadRemote(`${ASSETS}/Columns`) as RemoteComponent<IColumns>
export const remoteContainer = () =>
  loadRemote(`${ASSETS}/Container`) as RemoteComponent<IContainer>
export const remoteHero = () => loadRemote(`${ASSETS}/Hero`) as RemoteComponent<IHero>
export const remoteIcon = () => loadRemote(`${ASSETS}/Icon`) as RemoteComponent<IIcon>
export const remoteImage = () => loadRemote(`${ASSETS}/Image`) as RemoteComponent<IImage>
export const remoteMedia = () => loadRemote(`${ASSETS}/Media`) as RemoteComponent<IMedia>
export const remoteMenu = () => loadRemote(`${ASSETS}/Menu`) as RemoteComponent<IMenu>
export const remoteProgressBar = () => loadRemote(`${ASSETS}/ProgressBar`) as RemoteComponent<IProgressBar>
export const remoteSection = () => loadRemote(`${ASSETS}/Section`) as RemoteComponent<ISection>

// Custom remote components
export const remoteAppLayout = () => loadRemote(`${ASSETS}/AppLayout`) as RemoteComponent<IAppLayout>
export const remoteGlobalLayout = () => loadRemote(`${ASSETS}/GlobalLayout`) as RemoteComponent<IGlobalLayout>
export const remoteLoading = () => loadRemote(`${ASSETS}/Loading`) as RemoteComponent<ILoading>

// MFE remote dependencies
export const remoteHiveRoutes = () => loadRemote<IRemoteRoutes>(`${HIVE_MFE}/Routes`).then(m => m?.default) as Promise<RouteObject>

export const MFE_LIST = [
  remoteHiveRoutes,
]