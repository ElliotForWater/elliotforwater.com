import '../styles/base.css'

import React from 'react'
import { UserContext } from '../context/UserContext'
import { user } from '../__mocks__/userContext'

const userContext = {
  userState: user,
  setNextUserState: () => {},
}

export const decorators = [
  (Story) => (
    <UserContext.Provider value={userContext}>
      <Story />
    </UserContext.Provider>
  ),
]
