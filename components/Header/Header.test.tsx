import React from 'react'
import { mount } from 'enzyme'
import Header from './Header'

jest.mock('next/router', () => ({
  useRouter () {
    return {
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
    }
  },
}))

describe('Header', () => {
  it('should render without throwing an error', function () {
    const wrap = mount(<Header />)
    expect(wrap.find('img').first().prop('src')).toEqual('/images/water_droplet.svg')
  })
})
