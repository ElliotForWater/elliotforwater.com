import React from 'react'
import HeaderComponent from './Header'
import { UserContext } from '../../context/UserContext'
import { withNextRouter } from 'storybook-addon-next-router'

const user = { numOfSearches: 0 }

export default {
  title: 'Components/Header',
  decorators: [
    (Story) => (
      <UserContext.Provider value={[user, (newObj) => console.log(newObj)]}>
        <Story />
      </UserContext.Provider>
    ),
    withNextRouter,
  ],
}

export const Header = () => <HeaderComponent />
Header.story = {
  parameters: {
    nextRouter: {
      path: '/search?query=pizza&type=web',
      asPath: '/search?query=pizza&type=web',
      query: {
        query: 'pizza',
        type: 'web',
      },
    },
  },
}
