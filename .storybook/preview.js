import '../styles/base.css'

import React from 'react'
import { UserContext } from '../context/UserContext'
import { user } from '../__mocks__/userContext'

export const decorators = [
  (Story) => (
    <UserContext.Provider value={[user, (newObj) => console.log(newObj)]}>
      <Story />
    </UserContext.Provider>
  ),
]
