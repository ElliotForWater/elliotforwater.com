// Rename this test so it doesnt run
// TO FIX: JEST not compiling "import * as" syntax
// can be fix once we refactor the web component

import React from 'react'
import { mount, shallow } from 'enzyme'
import Layout from './Layout'

describe('Layout', () => {
  it('should render without throwing an error', function () {
    mount(<Layout pageTitle='home' pageDescription='some description' />)
  })

  it('should render with fluid layout', function () {
    mount(<Layout fluid pageTitle='home' pageDescription='some description' />)
  })

  it('should render with correct social meta tags', function () {
    const wrap = shallow(<Layout pageTitle='Home' pageDescription='some description' />)
    expect(wrap.find('title').text()).toBe('Home - Elliot for Water')
    expect(wrap.find('meta[name="og:title"]').prop('content')).toBe('Home - Elliot for Water')
    expect(wrap.find('meta[name="twitter:title"]').prop('content')).toBe('Home - Elliot for Water')
    expect(wrap.find('meta[name="twitter:description"]').prop('content')).toBe('some description')
    expect(wrap.find('meta[name="og:description"]').prop('content')).toBe('some description')
  })

  it('should render with correct with page description', function () {
    const wrap = shallow(<Layout pageTitle='Home' />)
    expect(wrap.find('meta[name="description"]').prop('content')).toBe(
      'Search Engine which collects water to build well'
    )
  })
})
