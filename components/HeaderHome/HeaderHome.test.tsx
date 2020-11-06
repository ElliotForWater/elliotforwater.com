import React from 'react'
import { mount } from 'enzyme'
import HeaderHome from './HeaderHome'

describe('HeaderHome', () => {
  it('should render without throwing an error', function () {
    const wrap = mount(<HeaderHome />)
    expect(wrap.find('img').first().prop('src')).toEqual('/images/water_droplet.svg')
  })
})
