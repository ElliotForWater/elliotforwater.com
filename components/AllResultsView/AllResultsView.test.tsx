import React from 'react'
import { shallow } from 'enzyme'
import AllResultsView from './AllResultsView'
import { render, screen } from '@testing-library/react'
import ALL_RESULTS from '../../__mocks__/webApi.json'

const webResults = {
  web: ALL_RESULTS.webPages.value,
  relatedSearches: ALL_RESULTS.relatedSearches?.value,
  images: ALL_RESULTS.images.value,
  videos: ALL_RESULTS.videos?.value,
  news: ALL_RESULTS.news.value,
}

const emptyResults = {
  web: undefined,
  relatedSearches: undefined,
  images: undefined,
  videos: undefined,
  news: undefined,
}

describe('AllResultsView', () => {
  it('should render without throwing an error', function () {
    const wrap = shallow(<AllResultsView results={webResults} query='sugar' />)
    expect(wrap).toBeDefined()
  })

  it('should render 16 articles', function () {
    render(<AllResultsView results={webResults} query='sugar' />)
    const article = screen.getAllByRole('article')
    expect(article.length).toBe(10)
  })

  it('should render no result title', function () {
    const noResQuery = 'hfkajdhfkahdfj'
    render(<AllResultsView results={emptyResults} query={`${noResQuery}`} />)
    const title = screen.getByText(/no_result_found/i)
    expect(title).toBeDefined()
  })

  it('should be empty', function () {
    const { container } = render(<AllResultsView results={undefined} query='sugar' />)
    expect(container.firstChild).toBeNull()
  })
})
