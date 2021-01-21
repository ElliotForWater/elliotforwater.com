import React from 'react'
import AllResultsViewComp from './AllResultsView'
import ALL_RESULTS from '../../__mocks__/webApi.json'

export default { title: 'Components/AllResultsView' }
const webResults = {
  organicItems: ALL_RESULTS.organicResults.items,
  sponsoredItems: ALL_RESULTS.sponsoredResults.items,
  relatedSearches: ALL_RESULTS.relatedSearches.items,
  imagesItems: ALL_RESULTS.imageResults.items,
}

export const AllResultsView = () => <AllResultsViewComp results={webResults} searchQuery='sugar' />
