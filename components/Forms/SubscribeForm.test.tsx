import React from 'react'
import { mount } from 'enzyme'
import SubscribeForm from './SubscribeForm'

describe('SubscribeForm', () => {
  it('should render without throwing an error', function () {
    const wrapper = mount(<SubscribeForm />)
    expect(wrapper.find('button').first().text()).toBe('Subscribe')
  })
})
