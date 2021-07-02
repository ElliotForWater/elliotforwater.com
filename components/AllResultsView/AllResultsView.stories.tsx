import React from 'react'
import AllResultsViewComp from './AllResultsView'
import ALL_RESULTS from '../../__mocks__/webApi.json'

export default { title: 'Components/AllResultsView' }
const webResults = {
  web: ALL_RESULTS.webPages.value,
  relatedSearches: ALL_RESULTS.relatedSearches?.value,
  images: ALL_RESULTS.images.value,
  videos: ALL_RESULTS.videos?.value,
  news: ALL_RESULTS.news.value,
}

export const AllResultsView = () => <AllResultsViewComp results={webResults} query='sugar' />
