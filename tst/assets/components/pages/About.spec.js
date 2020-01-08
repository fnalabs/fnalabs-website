/* eslint-env jest */
import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'

import ReactGA from 'react-ga'

import { About } from 'pages'

jest.mock('react-ga')

describe('<About />', () => {
  it('should render About page static content', () => {
    const tree = renderer.create(<About location={{ pathname: '/about' }} />).toJSON()

    expect(tree).toMatchSnapshot()
    expect(ReactGA.pageview).not.toBeCalled()
  })

  it('should render About page static content and report page view', () => {
    shallow(<About location={{ pathname: '/about' }} />, {
      context: { isConsent: true }
    })

    expect(ReactGA.pageview).toBeCalledTimes(1)
  })
})
