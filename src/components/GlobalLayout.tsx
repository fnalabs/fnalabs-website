import React, { type FC, lazy } from 'react'
import {
  remoteConsentContext,
  remoteAnalyticsToast,
  remoteGlobalLayout,
  remoteServiceWorker,
} from '../remotes'
import { IS_DEV, GA_ID, ROUTE, SW_ROUTE } from '../config'
import {
  NAV_LINK_LIST,
  POLICY_LINK_LIST,
  SOCIAL_LINK_LIST,
} from '../constants'

const AnalyticsToast = lazy(remoteAnalyticsToast)
const ConsentProvider = lazy(remoteConsentContext)
const RemoteGlobalLayout = lazy(remoteGlobalLayout)
const ServiceWorker = lazy(remoteServiceWorker)

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
    {!IS_DEV && <ServiceWorker src={SW_ROUTE} scope={ROUTE} />}
  </ConsentProvider>
)
export default GlobalLayout
