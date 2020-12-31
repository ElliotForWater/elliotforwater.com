import React from 'react'
import AllResultsViewComp from './AllResultsView'
import ALL_RESULTS from '../../__mocks__/webApi.json'

export default { title: 'Components/AllResultsView' }

export const AllResultsView = () => <AllResultsViewComp results={ALL_RESULTS} searchQuery='sugar' />
