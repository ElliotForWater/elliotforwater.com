import React from 'react'
import { render } from '@testing-library/react'
import Nav from './Nav'

describe('Nav', () => {
  it('should render without throwing an error', function () {
    const { container } = render(<Nav />)
    expect(container).toBeDefined()
  })
})
