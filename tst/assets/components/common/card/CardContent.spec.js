/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'

import { CardContent } from 'common/card'

describe('<CardContent />', () => {
  it('should render w/o content', () => {
    const cardContent = shallow(<CardContent />)

    expect(cardContent.instance()).toBeNull()
    expect(cardContent.is('div')).toBe(true)
    expect(cardContent.hasClass('card-content')).toBe(true)
  })

  it('should render w/ content', () => {
    const cardContent = shallow(<CardContent><div>test</div></CardContent>)

    expect(cardContent.contains(<div>test</div>)).toBe(true)
  })
})
