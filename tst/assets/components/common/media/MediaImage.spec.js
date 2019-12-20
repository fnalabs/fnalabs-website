/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'

import { MediaImage } from 'common/media'

it('<MediaImage /> should render', () => {
  const mediaImage = shallow(<MediaImage imgAlt='alt' imgSrc='src' />)

  expect(mediaImage.instance()).toBeInstanceOf(MediaImage)
  expect(mediaImage.is('div')).toBe(true)
  expect(mediaImage.hasClass('media-left')).toBe(true)
  expect(mediaImage.contains(<figure className='image is-48x48'><img src='src' alt='alt' /></figure>)).toBe(true)
})
