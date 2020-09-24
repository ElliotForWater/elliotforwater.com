import React from 'react'
import { mount } from 'enzyme'
import Water from '../why-water'

describe('Water', () => {
  it('should render without throwing an error', function () {
    const wrap = mount(<Water />)
    expect(wrap.find('div').text()).toBe('Why we collect water?')
  })
})
