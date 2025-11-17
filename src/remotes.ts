import type { ComponentType } from 'react'

import type { IBox } from '@mf-types/fnalabs_assets/Box'
import type { ICard } from '@mf-types/fnalabs_assets/Card'
import type { ICell } from '@mf-types/fnalabs_assets/Cell'
import type { IColumn } from '@mf-types/fnalabs_assets/Column'
import type { IColumns } from '@mf-types/fnalabs_assets/Columns'
import type { IContainer } from '@mf-types/fnalabs_assets/Container'
import type { IGrid } from '@mf-types/fnalabs_assets/Grid'
import type { IHero } from '@mf-types/fnalabs_assets/Hero'
import type { IIcon } from '@mf-types/fnalabs_assets/Icon'
import type { ILevel } from '@mf-types/fnalabs_assets/Level'
import type { IMedia } from '@mf-types/fnalabs_assets/Media'
import type { IMenu } from '@mf-types/fnalabs_assets/Menu'
import type { ISection } from '@mf-types/fnalabs_assets/Section'

import type { IGlobalLayout } from '@mf-types/fnalabs_assets/GlobalLayout'
import type { IAppLayout } from '@mf-types/fnalabs_assets/AppLayout'

import { loadRemote } from '@module-federation/enhanced/runtime'
import { ASSETS } from './config'

export const remoteGlobalLayout = () => loadRemote(`${ASSETS}/GlobalLayout`) as Promise<{ default: ComponentType<IGlobalLayout> }>
export const remoteAppLayout = () => loadRemote(`${ASSETS}/AppLayout`) as Promise<{ default: ComponentType<IAppLayout> }>

export const remoteBox = () => loadRemote(`${ASSETS}/Box`) as Promise<{ default: ComponentType<IBox> }>
export const remoteCard = () => loadRemote(`${ASSETS}/Card`) as Promise<{ default: ComponentType<ICard> }>
export const remoteCell = () => loadRemote(`${ASSETS}/Cell`) as Promise<{ default: ComponentType<ICell> }>
export const remoteColumn = () => loadRemote(`${ASSETS}/Column`) as Promise<{ default: ComponentType<IColumn> }>
export const remoteColumns = () => loadRemote(`${ASSETS}/Columns`) as Promise<{ default: ComponentType<IColumns> }>
export const remoteContainer = () =>
  loadRemote(`${ASSETS}/Container`) as Promise<{ default: ComponentType<IContainer> }>
export const remoteGrid = () => loadRemote(`${ASSETS}/Grid`) as Promise<{ default: ComponentType<IGrid> }>
export const remoteHero = () => loadRemote(`${ASSETS}/Hero`) as Promise<{ default: ComponentType<IHero> }>
export const remoteIcon = () => loadRemote(`${ASSETS}/Icon`) as Promise<{ default: ComponentType<IIcon> }>
export const remoteLevel = () => loadRemote(`${ASSETS}/Level`) as Promise<{ default: ComponentType<ILevel> }>
export const remoteMedia = () => loadRemote(`${ASSETS}/Media`) as Promise<{ default: ComponentType<IMedia> }>
export const remoteMenu = () => loadRemote(`${ASSETS}/Menu`) as Promise<{ default: ComponentType<IMenu> }>
export const remoteSection = () => loadRemote(`${ASSETS}/Section`) as Promise<{ default: ComponentType<ISection> }>
