import React from 'react'
import HeaderComponent from './HeaderHome'
import { UserContext } from '../../context/UserContext'
import { withNextRouter } from 'storybook-addon-next-router'

const user = { numOfSearches: 0 }

export default {
  title: 'Components/HeaderHome',
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
      path: '/search?query=caffe&type=web',
      asPath: '/search?query=caffe&type=web',
      query: {
        query: 'caffe',
        type: 'web',
      },
    },
  },
}
