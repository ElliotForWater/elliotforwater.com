// Rename this test so it doesnt run
// TO FIX: JEST not compiling "import * as" syntax
// can be fix once we refactor the web component

import React from 'react'
import { mount } from 'enzyme'
import Home from '../pages/index'

describe('Home', () => {
  it('should render without throwing an error', function () {
    const wrap = mount(<Home />)
    expect(wrap.find('h1').text()).toBe('Hello Elliot for Water')
  })
})
