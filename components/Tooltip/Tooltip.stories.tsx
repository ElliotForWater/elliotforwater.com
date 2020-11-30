import React from 'react'
import Tooltip from './Tooltip'

export default { title: 'Components/Tooltip' }

export const LeftTooltip = () => (
  <Tooltip isHidden={false} direction='left'>
    {' '}
    Some text for the tooltip
  </Tooltip>
)
export const RightTooltip = () => (
  <Tooltip isHidden={false} direction='right'>
    {' '}
    Some text for the tooltip
  </Tooltip>
)
