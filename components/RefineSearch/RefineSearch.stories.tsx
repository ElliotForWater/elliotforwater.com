import React from 'react'
import RefineSearchComp from './RefineSearch'

export default { title: 'Components/Refine Search' }

export const RefineSearch = () => (
  <RefineSearchComp
    refineSearches={[
      { text: 'link1', pixelUrl: 'http://someUrl' },
      { text: 'link2', pixelUrl: 'http://someUrl' },
      { text: 'link3', pixelUrl: 'http://someUrl' },
      { text: 'link4', pixelUrl: 'http://someUrl' },
    ]}
  />
)
