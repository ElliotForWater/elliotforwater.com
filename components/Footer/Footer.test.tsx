import React from 'react'
import { mount } from 'enzyme'
import Footer from './Footer'

describe('Footer', () => {
  it('should render without throwing an error', function () {
    const wrap = mount(<Footer />)
    expect(wrap.find('h4').first().text()).toBe('common:footer.social_with_us')
  })
})
