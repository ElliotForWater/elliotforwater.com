import React from 'react'
import { shallow } from 'enzyme'
import Nav from './Nav'

describe('Nav', () => {
  it('should render without throwing an error', function () {
    shallow(<Nav />)
  })
})
