import React from 'react'
import HeaderComponent from './HeaderHome'
import { withNextRouter } from 'storybook-addon-next-router'

export default {
  title: 'Components/HeaderHome',
  decorators: [(Story) => <Story />, withNextRouter],
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
