import React from 'react'
import { render } from '@testing-library/react'
import SearchBar from './SearchBar'

const useRouter = jest.spyOn(require('next/router'), 'useRouter')

describe('SearchBar', () => {
  it('should render without throwing an error', function () {
    useRouter.mockImplementationOnce(() => ({
      query: { query: 'coffee' },
    }))
    const { container } = render(<SearchBar />)
    expect(container).toBeDefined()
  })
})
