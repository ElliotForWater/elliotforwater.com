import React from 'react'
import { shallow } from 'enzyme'
import Map from './Map'

describe('Map', () => {
  it('should render without throwing an error', function () {
    const wrap = shallow(<Map searchQuery='Berlin' />)

    expect(wrap).toBeDefined()
  })
})
