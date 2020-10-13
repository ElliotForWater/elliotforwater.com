import React from 'react'
import { shallow } from 'enzyme'
import SearchFilters from './SearchFilters'

describe('SearchFilters', () => {
  it('should render without throwing an error', function () {
    shallow(<SearchFilters />)
  })
})
