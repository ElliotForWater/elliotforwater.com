import React from 'react'
import RefineSearchComp from './RefineSearch'

export default { title: 'Components/Refine Search' }

export const RefineSearch = () => (
  <RefineSearchComp
    refineSearches={[
      { text: 'link1', displayText: 'Link 1' },
      { text: 'link2', displayText: 'Link 2' },
      { text: 'link3', displayText: 'Link 3' },
      { text: 'link4', displayText: 'Link 4' },
    ]}
  />
)
