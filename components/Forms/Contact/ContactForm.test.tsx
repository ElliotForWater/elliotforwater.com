import React from 'react'
import { mount } from 'enzyme'
import ContactForm from './ContactForm'
import ReCAPTCHA from 'react-google-recaptcha'

describe('ContactForm', () => {
  it('should render without throwing an error', function () {
    const wrapper = mount(<ContactForm />)
    expect(wrapper.find('button').first().text()).toBe('common:forms.submit')
  })
})

describe('Recaptcha', () => {
  it('should exist', function () {
    const wrapper = mount(<ContactForm />)
    expect(wrapper.find(ReCAPTCHA).exists()).toBe(true)
  })
})
