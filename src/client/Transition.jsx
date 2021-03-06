/* eslint-env browser */
import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import CookieConsent, { Cookies } from 'react-cookie-consent'
import ReactGA from 'react-ga'

import { Provider } from 'contexts/Consent'

import meta from 'metadata'

class Transition extends Component {
  constructor (props) {
    super(props)

    this.state = { isConsent: this.isConsent }

    ReactGA.initialize(process.env.GA_ID)
    ReactGA.set({ dimension1: 'online' })
  }

  get isConsent () {
    return (Cookies.get('CookieConsent') === 'true' ||
      sessionStorage?.getItem('CookieConsent') === 'true') ??
      false
  }

  set isConsent (isConsent) {
    sessionStorage?.setItem('CookieConsent', String(isConsent)) // eslint-disable-line
    this.setState({ isConsent })
  }

  handleOnAccept = () => {
    const pageMeta = meta[this.props.location.pathname]
    const title = pageMeta.title
      ? `${meta.common.siteName} | ${pageMeta.title}`
      : meta.common.siteName

    ReactGA.pageview(this.props.location.pathname, undefined, title)
    this.isConsent = true
  }

  handleOnDecline = () => {
    if (Cookies.get('CookieConsent') === 'true') Cookies.set('CookieConsent', 'false')
    this.isConsent = false
  }

  async componentDidMount () {
    if ('serviceWorker' in navigator) {
      this.serviceWorker = await navigator.serviceWorker.register('/sw.js')

      navigator.serviceWorker.addEventListener('controllerchange', () => {
        location.reload()
      })
    }
  }

  async componentDidUpdate (prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      scrollTo(0, 0)

      if (this.serviceWorker) this.serviceWorker = await this.serviceWorker.update()
    }
  }

  render () {
    return (
      <Provider value={this.state}>
        {this.props.children}

        {!this.state.isConsent &&
          <CookieConsent
            disableStyles
            enableDeclineButton
            flipButtons
            buttonText='Accept'
            declineButtonText='Decline'
            buttonClasses='button is-small is-pulled-right is-dark'
            buttonWrapperClasses='has-text-right'
            declineButtonClasses='button is-small is-pulled-right is-light'
            containerClasses='cookieConsent notification is-radiusless'
            onAccept={this.handleOnAccept}
            onDecline={this.handleOnDecline}
          >
            FnA Labs uses cookies to provide you the best experience. By clicking <strong>Accept</strong> you are agreeing to our <Link to='/cookie'>Cookie</Link> and <Link to='/privacy'>Privacy</Link> policies.
          </CookieConsent>}
      </Provider>
    )
  }
}

export default withRouter(Transition)
