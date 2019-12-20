/* eslint-env jest */
import React from 'react'
import renderer from 'react-test-renderer'

import { About } from 'pages'

jest.mock('react-ga')

describe('<About />', () => {
  it('should render About page static content', () => {
    const tree = renderer.create(<About location={{ pathname: '/about' }} />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
