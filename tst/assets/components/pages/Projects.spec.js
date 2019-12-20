/* eslint-env jest */
import React from 'react'
import renderer from 'react-test-renderer'

import { Projects } from 'pages'

jest.mock('react-ga')

describe('<Projects />', () => {
  it('should render Projects page static content', () => {
    const tree = renderer.create(<Projects location={{ pathname: '/projects' }} />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
