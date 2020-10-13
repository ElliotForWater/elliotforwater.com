import React from 'react'
import { mount } from 'enzyme'
import Header from './Header'

describe('Header', () => {
  it('should render without throwing an error', function () {
    const wrap = mount(<Header />)
    expect(wrap.find('img').first().prop('src')).toEqual('/images/small_logo.svg')
  })
})
