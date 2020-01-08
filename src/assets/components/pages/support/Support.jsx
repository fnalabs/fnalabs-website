import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import ReactGA from 'react-ga'

import Consent from 'contexts/Consent'

import { SupportHero } from './SupportHero'
import { SupportMenu } from './SupportMenu'

import meta from 'metadata'

export default class Projects extends Component {
  static contextType = Consent
  static contextTypes = {
    isConsent: PropTypes.bool
  }

  componentDidMount () {
    if (this.context.isConsent) {
      const title = `${meta.common.siteName} | ${meta['/support'].title}`
      ReactGA.pageview(this.props.location.pathname, undefined, title)
    }
  }

  render () {
    const { title, description, url } = meta['/support']
    const siteName = meta.common.siteName

    return (
      <>
        <Helmet>
          <title>{siteName} | {title}</title>
          <meta name='description' content={description} />
          <link rel='canonical' href={url} />

          <meta property='og:title' content={`${siteName} | ${title}`} />
          <meta property='og:description' content={description} />
          <meta property='og:site_name' content={siteName} />
          <meta property='og:url' content={url} />
          <meta property='og:type' content='website' />
        </Helmet>

        <SupportHero />
        <SupportMenu />

      </>
    )
  }
}
