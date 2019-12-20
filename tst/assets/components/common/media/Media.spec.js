/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'

import { Media } from 'common/media'

describe('<Media />', () => {
  it('should render w/o content', () => {
    const media = shallow(<Media />)

    expect(media.instance()).toBeNull()
    expect(media.is('div')).toBe(true)
    expect(media.hasClass('media')).toBe(true)
  })

  it('should render w/ content', () => {
    const media = shallow(<Media><div>test</div></Media>)

    expect(media.contains(<div>test</div>)).toBe(true)
  })
})
