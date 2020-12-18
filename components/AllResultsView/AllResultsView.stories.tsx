import React from 'react'
import AllResultsViewComp from './AllResultsView'
import ALL_RESULTS from '../../__mocks__/webApi.json'

export default { title: 'Components/AllResultsView' }

export const AllResultsView = () => <AllResultsViewComp organicItems={ALL_RESULTS.organicResults.items} sponsoredItems={ALL_RESULTS.sponsoredResults.items} relatedSearches={ALL_RESULTS.relatedSearches.items} images={ALL_RESULTS.imageResults.items} searchQuery='sugar' />
