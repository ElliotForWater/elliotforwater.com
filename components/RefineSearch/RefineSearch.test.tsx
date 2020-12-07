import React from 'react'
import { shallow } from 'enzyme'
import RefineSearch from './RefineSearch'

describe('RefineSearch', () => {
  it('should render without throwing an error', function () {
    shallow(<RefineSearch refineSearches={['test', 'test2', 'test3']} />)
  })

  it('should render two item', function () {
    const wrapper = shallow(<RefineSearch refineSearches={['test', 'test2']} />)
    expect(wrapper.find('a').first().text()).toBe('test')
    expect(wrapper.find('a').last().text()).toBe('test2')
  })
})
