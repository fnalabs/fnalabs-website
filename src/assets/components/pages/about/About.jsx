import React, { Component, Fragment } from 'react'
import Helmet from 'react-helmet'
import { Cookies } from 'react-cookie-consent'
import ReactGA from 'react-ga'

import { AboutHero } from './AboutHero'
import { WhoWeAre } from './WhoWeAre'
import { HowWeWork } from './HowWeWork'

import meta from 'metadata.json'

export default class About extends Component {
  componentDidMount () {
    if (Cookies.get('CookieConsent')) {
      const title = `${meta['/about'].title} | ${meta.common.siteName}`
      ReactGA.pageview(this.props.location.pathname, undefined, title)
    }
  }

  render () {
    const { title, description, url } = meta['/about']
    const siteName = meta.common.siteName

    return (
      <Fragment>
        <Helmet>
          <title>{title} | {siteName}</title>
          <meta name='description' content={description} />
          <link rel='canonical' href={url} />

          <meta property='og:title' content={`{title} | {siteName}`} />
          <meta property='og:description' content={description} />
          <meta property='og:site_name' content={siteName} />
          <meta property='og:url' content={url} />
          <meta property='og:type' content='website' />
        </Helmet>

        <AboutHero />
        <WhoWeAre />
        <HowWeWork />

      </Fragment>
    )
  }
}
