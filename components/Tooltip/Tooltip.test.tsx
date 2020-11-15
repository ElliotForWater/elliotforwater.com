import React from 'react'
import { shallow } from 'enzyme'
import Tooltip from './Tooltip'

describe('Tooltip', () => {
  it('should render without throwing an error', function () {
    shallow(
      <Tooltip isHidden={false} direction='left'>
        {' '}
        Some text for the tooltip
      </Tooltip>
    )
  })
})
