/* eslint-env jest */
import React from 'react'
import renderer from 'react-test-renderer'

import { Cookies } from 'react-cookie-consent'
import ReactGA from 'react-ga'

import Projects from '../../../../src/assets/components/pages/projects/Projects.jsx'

jest.mock('react-ga')

describe('<Projects />', () => {
  test('should render Projects page static content', () => {
    Cookies.get = jest.fn().mockReturnValue(false)

    const tree = renderer.create(<Projects location={{ pathname: '/projects' }} />).toJSON()

    expect(tree).toMatchSnapshot()
    expect(ReactGA.pageview).not.toBeCalled()
  })

  test('should render Projects page static content and report page view', () => {
    Cookies.get = jest.fn().mockReturnValue(true)

    const tree = renderer.create(<Projects location={{ pathname: '/projects' }} />).toJSON()

    expect(tree).toMatchSnapshot()
    expect(ReactGA.pageview).toBeCalledTimes(1)
  })
})
