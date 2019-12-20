/* eslint-env jest */
import React from 'react'
import renderer from 'react-test-renderer'

import { Home } from 'pages'

jest.mock('react-ga')

describe('<Home />', () => {
  it('should render homepage static content', () => {
    const tree = renderer.create(<Home location={{ pathname: '/' }} />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
