import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactGA from 'react-ga'

import Consent from 'contexts/Consent'

import { Header } from 'layout'

import { AnalyticsLink, Container, Tile } from 'common'
import { Hero, HeroBody } from 'common/hero'
import { HiveIO } from 'icons'

import meta from 'metadata'

export default class Home extends Component {
  static contextType = Consent
  static contextTypes = {
    isConsent: PropTypes.bool
  }

  componentDidMount () {
    if (this.context.isConsent) {
      ReactGA.pageview(this.props.location.pathname, undefined, meta.common.siteName)
    }
  }

  render () {
    const { description, url } = meta['/']

    return (
      <>
        <Header title={meta.common.siteName} description={description} url={url} />

        <Hero size='fullheight' color='light' bold>
          <HeroBody>
            <Container>
              <Tile type='ancestor'>
                <Tile type='parent'>
                  <Tile type='child' size={6} vertical centered>
                    <h1 className='title'>
                      <HiveIO className='svg-inline' height='72' />
                      Hive<sup>io</sup>
                    </h1>
                    <h2 className='subtitle'>A reactive, cloud-native framework for building microservices.</h2>
                    <AnalyticsLink to='https://hiveframework.io' className='button is-link' target='_blank' rel='noopener noreferrer'>Learn More</AnalyticsLink>
                  </Tile>

                  <Tile type='child' size={6}>
                    <div className='svg-animation-container'>
                      <div className='svg-animation is-mongo-svg is-svg-1' />
                      <div className='svg-animation is-hive-svg is-svg-2' />
                      <div className='svg-animation is-envoy-svg is-svg-3' />

                      <div className='svg-animation is-elastic-svg is-svg-4' />
                      <div className='svg-animation is-hive-svg is-svg-5' />
                      <div className='svg-animation is-hive-svg is-svg-6' />
                      <div className='svg-animation is-envoy-svg is-svg-7' />

                      <div className='svg-animation is-redis-svg is-svg-8' />
                      <div className='svg-animation is-kafka-svg is-svg-9' />
                      <div className='svg-animation is-hive-svg is-svg-10' />
                      <div className='svg-animation is-hive-svg is-svg-11' />
                      <div className='svg-animation is-hive-svg is-svg-12' />
                      <div className='svg-animation is-envoy-svg is-svg-13' />
                      <div className='svg-animation is-envoy-svg is-svg-14' />
                    </div>
                  </Tile>
                </Tile>
              </Tile>
            </Container>
          </HeroBody>
        </Hero>
      </>
    )
  }
}
