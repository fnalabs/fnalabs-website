import React, { type FC, lazy } from 'react'
import {
  remoteConsentContext,
  remoteAnalyticsToast,
  remoteGlobalLayout,
} from '../remotes'
import {
  NAV_LINK_LIST,
  POLICY_LINK_LIST,
  SOCIAL_LINK_LIST,
} from '../constants'
import { GA_ID } from '../config'

const AnalyticsToast = lazy(remoteAnalyticsToast)
const ConsentProvider = lazy(remoteConsentContext)
const RemoteGlobalLayout = lazy(remoteGlobalLayout)

const GlobalLayout: FC = () => (
  <ConsentProvider>
    <RemoteGlobalLayout
      brandIcon='FnALabsInverted'
      brandSlogan='Fn Awesome!'
      pageLinks={NAV_LINK_LIST}
      policyLinks={POLICY_LINK_LIST}
      socialLinks={SOCIAL_LINK_LIST}
    />
    <AnalyticsToast gaId={GA_ID} />
  </ConsentProvider>
)
export default GlobalLayout
