import React from 'react'
import { render, screen } from '@testing-library/react'
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
  it('should render without throwing an error', async function () {
    render(
      <UserContext.Provider value={userContext}>
        <HeaderHome />
      </UserContext.Provider>
    )
    const img = screen.getByRole('img')
    expect(img.src).toContain('/images/water_droplet.svg')
  })
})
