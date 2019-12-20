/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'

import { CardFooter } from 'common/card'

describe('<CardFooter />', () => {
  it('should render w/o content', () => {
    const cardFooter = shallow(<CardFooter />)

    expect(cardFooter.instance()).toBeNull()
    expect(cardFooter.is('div')).toBe(true)
    expect(cardFooter.hasClass('card-footer')).toBe(true)
  })

  it('should render w/ content', () => {
    const cardFooter = shallow(<CardFooter><div>test</div></CardFooter>)

    expect(cardFooter.contains(<div>test</div>)).toBe(true)
  })
})
