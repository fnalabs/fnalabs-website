/* eslint-env jest */
import React from 'react'
import renderer from 'react-test-renderer'

import { Cookies } from 'react-cookie-consent'
import ReactGA from 'react-ga'

import Support from '../../../../src/assets/components/pages/support/Support.jsx'

jest.mock('react-ga')

test('<Support /> - should render Support page static content', () => {
  Cookies.get = jest.fn().mockReturnValue(false)

  const tree = renderer.create(<Support location={{ pathname: '/support' }} />).toJSON()

  expect(tree).toMatchSnapshot()
  expect(ReactGA.pageview).not.toBeCalled()
})

test('<Support /> - should render Support page static content and report page view', () => {
  Cookies.get = jest.fn().mockReturnValue(true)

  const tree = renderer.create(<Support location={{ pathname: '/support' }} />).toJSON()

  expect(tree).toMatchSnapshot()
  expect(ReactGA.pageview).toBeCalledTimes(1)
})
