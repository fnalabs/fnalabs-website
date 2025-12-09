import React, { type FC, lazy } from 'react'
import { remoteGlobalLayout } from '../remotes'
import {
  NAV_LINK_LIST,
  POLICY_LINK_LIST,
  SOCIAL_LINK_LIST,
} from '../constants'

const RemoteGlobalLayout = lazy(remoteGlobalLayout)

const GlobalLayout: FC = () => (
  <RemoteGlobalLayout
    brandIcon='FnALabsInverted'
    brandSlogan='Fn Awesome!'
    pageLinks={NAV_LINK_LIST}
    policyLinks={POLICY_LINK_LIST}
    socialLinks={SOCIAL_LINK_LIST}
  />
)
export default GlobalLayout
