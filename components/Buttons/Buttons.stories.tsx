import * as React from 'react'
import ButtonPrimary from './ButtonPrimary'
import ButtonOutline from './ButtonOutline'

export default { title: 'Inputs/Button' }

export const Primary = () => (
  <ButtonPrimary>
    <a href="#">Add Elliot for Water to Chrome</a>
  </ButtonPrimary>
)

export const Outline = () => <ButtonOutline>Subscribe</ButtonOutline>
