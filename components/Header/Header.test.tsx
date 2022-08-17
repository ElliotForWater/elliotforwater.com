import mockMediaQuery from '../../__mocks__/matchMedia'

import React from 'react'
import { screen, render } from '@testing-library/react'
import Header from './Header'
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
    render(
      <UserContext.Provider value={userContext}>
        <Header />
      </UserContext.Provider>
    )
    const firstImage = screen.getAllByRole('img')[0]
    expect(firstImage.src).toContain('/images/water_droplet.svg')
  })
})
