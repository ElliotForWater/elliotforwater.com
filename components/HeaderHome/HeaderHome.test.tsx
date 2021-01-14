import React from 'react'
import { mount } from 'enzyme'
import HeaderHome from './HeaderHome'
import { UserContext } from '../../context/UserContext'
import { user } from '../../__mocks__/userContext'

const userContext = {
  userState: user,
  setNextUserState: () => {},
}
jest.mock('next/router', () => ({
  useRouter() {
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
      <UserContext.Provider value={userContext}>
        <HeaderHome />
      </UserContext.Provider>
    )
    expect(wrap.find('img').first().prop('src')).toEqual('/images/water_droplet.svg')
  })
})
