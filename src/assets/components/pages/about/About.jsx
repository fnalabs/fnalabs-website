import React, { Component } from 'react'
import Helmet from 'react-helmet'
import ReactGA from 'react-ga'

import Consent from 'contexts/Consent'

import { AboutHero } from './AboutHero'
import { WhoWeAre } from './WhoWeAre'
import { HowWeWork } from './HowWeWork'

import meta from 'metadata'

export default class About extends Component {
  static contextType = Consent

  componentDidMount () {
    if (this.context.isConsent) {
      const title = `${meta.common.siteName} | ${meta['/about'].title}`
      ReactGA.pageview(this.props.location.pathname, undefined, title)
    }
  }

  render () {
    const { title, description, url } = meta['/about']
    const siteName = meta.common.siteName

    return (
      <>
        <Helmet>
          <title>{siteName} | {title}</title>
          <meta name='description' content={description} />
          <link rel='canonical' href={url} />

          <meta property='og:title' content={`${title} | ${siteName}`} />
          <meta property='og:description' content={description} />
          <meta property='og:site_name' content={siteName} />
          <meta property='og:url' content={url} />
          <meta property='og:type' content='website' />
        </Helmet>

        <AboutHero />
        <WhoWeAre />
        <HowWeWork />

      </>
    )
  }
}
