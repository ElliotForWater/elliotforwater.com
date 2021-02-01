// Rename this test so it doesnt run
// TO FIX: JEST not compiling "import * as" syntax
// can be fix once we refactor the web component

import React from 'react'
import { mount } from 'enzyme'
import Water from '../pages/why-water'
import Layout from '../components/Layout/Layout'
import ButtonPrimary from '../components/Buttons/ButtonPrimary'

describe('Water', () => {
  it('should render without throwing an error', function () {
    const wrap = mount(<Water />)
    expect(wrap.find(Layout).prop('pageTitle')).toBe('whyWater:pageTitle')
    expect(wrap.find(ButtonPrimary).first().prop('linkHref')).toBe(
      'https://chrome.google.com/webstore/detail/elliot-for-water/ddfnnfelkcabbeebchaegpcdcmdekoim'
    )
  })
})
