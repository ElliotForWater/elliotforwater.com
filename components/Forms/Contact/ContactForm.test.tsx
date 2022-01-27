import React from 'react'
import { mount } from 'enzyme'
import ContactForm from './ContactForm'

describe('ContactForm', () => {
  it('should render without throwing an error', function () {
    const wrapper = mount(<ContactForm />)
    expect(wrapper.find('button').first().text()).toBe('common:forms.submit')
  })
})
