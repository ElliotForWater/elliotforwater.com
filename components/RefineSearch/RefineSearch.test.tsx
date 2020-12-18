import React from 'react'
import { shallow } from 'enzyme'
import RefineSearch from './RefineSearch'
import ALL_RESULTS from '../../__mocks__/webApi.json'

describe('RefineSearch', () => {
  it('should render without throwing an error', function () {
    shallow(<RefineSearch refineSearches={ALL_RESULTS.relatedSearches.items} />)
  })

  it('should render two item', function () {
    const wrapper = shallow(<RefineSearch refineSearches={ALL_RESULTS.relatedSearches.items} />)
    expect(wrapper.find('a').first().text()).toBe('berlin germany')
    expect(wrapper.find('a').last().text()).toBe('irving berlin white christmas')
  })
})
