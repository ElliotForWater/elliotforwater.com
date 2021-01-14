import React from 'react'
import HeaderComponent from './Header'
import { withNextRouter } from 'storybook-addon-next-router'

export default {
  title: 'Components/Header',
  decorators: [(Story) => <Story />, withNextRouter],
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
