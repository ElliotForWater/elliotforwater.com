import React from 'react'
import { mount } from 'enzyme'
import SubscribeForm from './SubscribeForm'
import ReCAPTCHA from 'react-google-recaptcha'

describe('SubscribeForm', () => {
  it('should render without throwing an error', function () {
    const wrapper = mount(<SubscribeForm />)
    expect(wrapper.find('button').first().text()).toBe('common:forms.subscribe')
  })
})

describe('Recaptcha', () => {
  it('should exist', function () {
    const wrapper = mount(<SubscribeForm />)
    expect(wrapper.find(ReCAPTCHA).exists()).toBe(true)
  })
})
