import React from 'react'
import { shallow } from 'enzyme'
import SearchBar from './SearchBar'

const useRouter = jest.spyOn(require('next/router'), 'useRouter')

describe('SearchBar', () => {
  it('should render without throwing an error', function () {
    useRouter.mockImplementationOnce(() => ({
      query: { query: 'coffee' },
    }))
    shallow(<SearchBar />)
  })
})
