/* eslint-env jest */
import React from 'react'
import renderer from 'react-test-renderer'

import { Support } from 'pages'

jest.mock('react-ga')

describe('<Support />', () => {
  it('should render Support page static content', () => {
    const tree = renderer.create(<Support location={{ pathname: '/support' }} />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
