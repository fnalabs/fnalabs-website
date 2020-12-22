import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactGA from 'react-ga'

import Consent from 'contexts/Consent'

import { Header } from 'layout'

import { AboutHero } from './AboutHero'
import { WhoWeAre } from './WhoWeAre'
import { HowWeWork } from './HowWeWork'

import meta from 'metadata'

export default class About extends Component {
  static contextType = Consent
  static contextTypes = {
    isConsent: PropTypes.bool
  }

  componentDidMount () {
    if (this.context.isConsent) {
      const title = `${meta.common.siteName} | ${meta['/about'].title}`
      ReactGA.pageview(this.props.location.pathname, undefined, title)
    }
  }

  render () {
    const { title, description, url } = meta['/about']

    return (
      <>
        <Header title={`${meta.common.siteName} | ${title}`} description={description} url={url} />

        <AboutHero />
        <WhoWeAre />
        <HowWeWork />

      </>
    )
  }
}
