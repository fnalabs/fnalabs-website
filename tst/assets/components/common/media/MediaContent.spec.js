/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'

import { MediaContent } from 'common/media'

it('<MediaContent /> should render', () => {
  const mediaContent = shallow(<MediaContent title='test' subtitle='subtest' />)

  expect(mediaContent.instance()).toBeInstanceOf(MediaContent)
  expect(mediaContent.is('div')).toBe(true)
  expect(mediaContent.hasClass('media-content')).toBe(true)

  expect(mediaContent.contains(<h2 className='title is-4'>test</h2>)).toBe(true)
  expect(mediaContent.contains(<h3 className='subtitle is-6'>subtest</h3>)).toBe(true)
})
