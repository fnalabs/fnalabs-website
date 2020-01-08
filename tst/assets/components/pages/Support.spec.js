/* eslint-env jest */
import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'

import ReactGA from 'react-ga'

import { Support } from 'pages'

jest.mock('react-ga')

describe('<Support />', () => {
  it('should render Support page static content', () => {
    const tree = renderer.create(<Support location={{ pathname: '/support' }} />).toJSON()

    expect(tree).toMatchSnapshot()
    expect(ReactGA.pageview).not.toBeCalled()
  })

  it('should render Support page static content and report page view', () => {
    shallow(<Support location={{ pathname: '/support' }} />, {
      context: { isConsent: true }
    })

    expect(ReactGA.pageview).toBeCalledTimes(1)
  })
})
