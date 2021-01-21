import React from 'react'
import { shallow } from 'enzyme'
import AllResultsView from './AllResultsView'
import { render, screen } from '@testing-library/react'
import ALL_RESULTS from '../../__mocks__/webApi.json'
const webResults = {
  organicItems: ALL_RESULTS.organicResults.items,
  sponsoredItems: ALL_RESULTS.sponsoredResults.items,
  relatedSearches: ALL_RESULTS.relatedSearches.items,
  imagesItems: ALL_RESULTS.imageResults.items,
}

describe('AllResultsView', () => {
  it('should render without throwing an error', function () {
    const wrap = shallow(<AllResultsView results={webResults} searchQuery='sugar' />)
    expect(wrap).toBeDefined()
  })

  it('should render 16 articles', function () {
    render(<AllResultsView results={webResults} searchQuery='sugar' />)
    const article = screen.getAllByRole('article')
    expect(article.length).toBe(16)
  })
})
