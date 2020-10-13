import React from 'react'
import { shallow } from 'enzyme'
import SearchBar from './SearchBar'

describe('SearchBar', () => {
  it('should render without throwing an error', function () {
    shallow(<SearchBar />)
  })
})
