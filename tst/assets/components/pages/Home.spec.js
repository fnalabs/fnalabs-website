/* eslint-env jest */
import React from 'react'
import renderer from 'react-test-renderer'

import { Cookies } from 'react-cookie-consent'
import ReactGA from 'react-ga'

import Home from '../../../../src/assets/components/pages/Home.jsx'

jest.mock('react-ga')

test('<Home /> - should render homepage static content', () => {
  Cookies.get = jest.fn().mockReturnValue(false)

  const tree = renderer.create(<Home location={{ pathname: '/' }} />).toJSON()

  expect(tree).toMatchSnapshot()
  expect(ReactGA.pageview).not.toBeCalled()
})

test('<Home /> - should render homepage static content and report page view', () => {
  Cookies.get = jest.fn().mockReturnValue(true)

  const tree = renderer.create(<Home location={{ pathname: '/' }} />).toJSON()

  expect(tree).toMatchSnapshot()
  expect(ReactGA.pageview).toBeCalledTimes(1)
})
