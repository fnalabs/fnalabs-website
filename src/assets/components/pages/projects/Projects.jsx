import React, { Component, Fragment } from 'react'
import Helmet from 'react-helmet'
import { Cookies } from 'react-cookie-consent'
import ReactGA from 'react-ga'

import { ProjectHero } from './ProjectHero'
import { ProjectTiles } from './ProjectTiles'

import meta from 'metadata.json'

export default class Projects extends Component {
  componentDidMount () {
    if (Cookies.get('CookieConsent')) {
      const title = `${meta['/projects'].title} | ${meta.common.siteName}`
      ReactGA.pageview(this.props.location.pathname, undefined, title)
    }
  }

  render () {
    const { title, description, url } = meta['/projects']
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

        <ProjectHero />
        <ProjectTiles />

      </Fragment>
    )
  }
}
