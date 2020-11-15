import React from 'react'
import { mount } from 'enzyme'
import SubscribeForm from './SubscribeForm'

describe('SubscribeForm', () => {
  it('should render without throwing an error', function () {
    const wrap = mount(<SubscribeForm />)
    expect(wrap.find('h4').first().text()).toBe('Get social with us')
  })
})
