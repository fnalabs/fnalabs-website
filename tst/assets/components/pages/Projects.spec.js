/* eslint-env jest */
import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'

import ReactGA from 'react-ga'

import { Projects } from 'pages'

jest.mock('react-ga')

describe('<Projects />', () => {
  it('should render Projects page static content', () => {
    const tree = renderer.create(<Projects location={{ pathname: '/projects' }} />).toJSON()

    expect(tree).toMatchSnapshot()
    expect(ReactGA.pageview).not.toBeCalled()
  })

  it('should render Projects page static content and report page view', () => {
    shallow(<Projects location={{ pathname: '/projects' }} />, {
      context: { isConsent: true }
    })

    expect(ReactGA.pageview).toBeCalledTimes(1)
  })
})
