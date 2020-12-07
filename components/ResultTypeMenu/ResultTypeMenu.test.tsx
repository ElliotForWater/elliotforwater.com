import React from 'react'
import { shallow } from 'enzyme'
import ResultTypeMenu from './ResultTypeMenu'

describe('ResultTypeMenu', () => {
  it('should render without throwing an error', function () {
    shallow(<ResultTypeMenu />)
  })
})
