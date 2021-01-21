import React from 'react'
import { mount } from 'enzyme'
import HeaderHome from './HeaderHome'
import { act } from 'react-dom/test-utils'
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
  it('should render without throwing an error', async function () {
    await act(async () => {
      const wrap = mount(
        <UserContext.Provider value={userContext}>
          <HeaderHome />
        </UserContext.Provider>
      )
      expect(wrap.find('img').first().prop('src')).toEqual('/images/water_droplet.svg')
    })
  })
})
