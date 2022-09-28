import React from 'react'
import { render } from '@testing-library/react'
import Tooltip from './Tooltip'

describe('Tooltip', () => {
  it('should render without throwing an error', function () {
    const { container } = render(
      <Tooltip isHidden={false} direction='left'>
        {' '}
        Some text for the tooltip
      </Tooltip>
    )
    expect(container).toBeDefined()
  })
})
