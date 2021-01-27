import mockMediaQuery from '../../__mocks__/matchMedia'

import React from 'react'
import { mount } from 'enzyme'
import Header from './Header'
import { act } from 'react-dom/test-utils'
import { UserContext } from '../../context/UserContext'
import { user } from '../../__mocks__/userContext'
mockMediaQuery()

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

describe('Header', () => {
  it('should render without throwing an error', async function () {
    await act(async () => {
      const wrap = mount(
        <UserContext.Provider value={userContext}>
          <Header />
        </UserContext.Provider>
      )
      expect(wrap.find('img').first().prop('src')).toEqual('/images/water_droplet.svg')
    })
  })
})
