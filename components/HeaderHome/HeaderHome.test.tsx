import React from 'react'
import { mount } from 'enzyme'
import HeaderHome from './HeaderHome'
import { UserContext } from '../../context/UserContext'

const user = { numOfSearches: 0 }

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

describe('HeaderHome', () => {
  it('should render without throwing an error', function () {
    const wrap = mount(
      <UserContext.Provider value={[user, (newObj) => console.log(newObj)]}>
        <HeaderHome />
      </UserContext.Provider>,
    )
    expect(wrap.find('img').first().prop('src')).toEqual('/images/water_droplet.svg')
  })
})
