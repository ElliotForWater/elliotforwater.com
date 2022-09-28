import React from 'react'
import { render } from '@testing-library/react'
import Map from './Map'

describe('Map', () => {
  it('should render without throwing an error', function () {
    const { container } = render(<Map searchQuery='Berlin' />)

    expect(container).toBeDefined()
  })
})
