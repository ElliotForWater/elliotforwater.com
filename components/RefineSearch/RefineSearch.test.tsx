import React from 'react'
import { shallow } from 'enzyme'
import RefineSearch from './RefineSearch'
import ALL_RESULTS from '../../__mocks__/webApi.json'

describe('RefineSearch', () => {
  it('should render without throwing an error', function () {
    shallow(<RefineSearch refineSearches={ALL_RESULTS.relatedSearches?.value} />)
  })

  it('should render two item', function () {
    const wrapper = shallow(<RefineSearch refineSearches={ALL_RESULTS.relatedSearches?.value} />)
    expect(wrapper.find('a').first().text()).toBe('news london today')
    expect(wrapper.find('a').last().text()).toBe('descrizione di londra')
  })
})
