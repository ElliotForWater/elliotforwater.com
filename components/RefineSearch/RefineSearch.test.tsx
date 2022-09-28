import React from 'react'
import { render, screen } from '@testing-library/react'
import RefineSearch from './RefineSearch'
import ALL_RESULTS from '../../__mocks__/webApi.json'

describe('RefineSearch', () => {
  it('should render without throwing an error', function () {
    const { container } = render(<RefineSearch refineSearches={ALL_RESULTS.relatedSearches?.value} />)
    expect(container).toBeDefined()
  })

  it('should render two item', function () {
    render(<RefineSearch refineSearches={ALL_RESULTS.relatedSearches?.value} />)
    expect(screen.getAllByText('news london today')).toBeDefined()
    expect(screen.getAllByText('descrizione di londra')).toBeDefined()
  })
})
