import React from 'react'
import { mount } from 'enzyme'
import ButtonPrimary from './ButtonPrimary'
import { render, screen, fireEvent } from '@testing-library/react'

describe('ButtonPrimary', () => {
  it('should render with <a> tag', function () {
    const wrap = mount(<ButtonPrimary linkHref='#'>I'm a button</ButtonPrimary>)
    expect(wrap.find('a').exists()).toBe(true)
  })

  it('should render without <a> tag', function () {
    let func = 0
    render(<ButtonPrimary onClick={() => (func = 1)}>I'm a button</ButtonPrimary>)
    const btn = screen.getByText("I'm a button")
    fireEvent.click(btn)
    expect(func).toEqual(1)
  })
})
