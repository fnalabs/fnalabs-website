import React, { type FC, lazy } from 'react'
import { remoteAppLayout } from '../remotes'
import { NAV_LINK_LIST } from '../constants'

const RemoteAppLayout = lazy(remoteAppLayout)

const AppLayout: FC = () => (
  <RemoteAppLayout spaced color='dark' endLinks={NAV_LINK_LIST} />
)
export default AppLayout
