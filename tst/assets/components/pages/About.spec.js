/* eslint-env jest */
import React from 'react'
import renderer from 'react-test-renderer'

import { Cookies } from 'react-cookie-consent'
import ReactGA from 'react-ga'

import About from '../../../../src/assets/components/pages/about/About.jsx'

jest.mock('react-ga')

describe('<About />', () => {
  test('should render About page static content', () => {
    Cookies.get = jest.fn().mockReturnValue(false)

    const tree = renderer.create(<About location={{ pathname: '/about' }} />).toJSON()

    expect(tree).toMatchSnapshot()
    expect(ReactGA.pageview).not.toBeCalled()
  })

  test('should render About page static content and report page view', () => {
    Cookies.get = jest.fn().mockReturnValue(true)

    const tree = renderer.create(<About location={{ pathname: '/about' }} />).toJSON()

    expect(tree).toMatchSnapshot()
    expect(ReactGA.pageview).toBeCalledTimes(1)
  })
})
