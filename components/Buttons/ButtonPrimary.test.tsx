import React from 'react'
import { shallow, mount } from 'enzyme'
import ButtonPrimary from './ButtonPrimary'

describe('ButtonPrimary', () => {
  it('should render with <a> tag', function () {
    const wrap = mount(<ButtonPrimary linkHref='#'>I'm a button</ButtonPrimary>)
    expect(wrap.find('a').exists()).toBe(true)
  })

  it('should render without <a> tag', function () {
    const clickMock = jest.fn()
    const wrap = shallow(<ButtonPrimary onClick={clickMock}>I'm a button</ButtonPrimary>)
    wrap.simulate('click')
    expect(clickMock.mock.calls.length).toBe(1)
  })
})
