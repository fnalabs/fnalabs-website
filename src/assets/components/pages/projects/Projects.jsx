import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactGA from 'react-ga'

import Consent from 'contexts/Consent'

import { Header } from 'layout'

import { ProjectHero } from './ProjectHero'
import { ProjectTiles } from './ProjectTiles'

import meta from 'metadata'

export default class Projects extends Component {
  static contextType = Consent
  static contextTypes = {
    isConsent: PropTypes.bool
  }

  componentDidMount () {
    if (this.context.isConsent) {
      const title = `${meta.common.siteName} | ${meta['/projects'].title}`
      ReactGA.pageview(this.props.location.pathname, undefined, title)
    }
  }

  render () {
    const { title, description, url } = meta['/projects']

    return (
      <>
        <Header title={`${meta.common.siteName} | ${title}`} description={description} url={url} />

        <ProjectHero />
        <ProjectTiles />

      </>
    )
  }
}
