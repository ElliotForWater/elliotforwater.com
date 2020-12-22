import React from 'react'
import SearchBar from './SearchBar'
import { withNextRouter } from 'storybook-addon-next-router'

export default { title: 'Components/Search Bar', decorators: [withNextRouter] }

export const MainSearchBar = () => <SearchBar />

MainSearchBar.story = {
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
