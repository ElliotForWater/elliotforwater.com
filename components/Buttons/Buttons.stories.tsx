import * as React from 'react'
import ButtonPrimary from './ButtonPrimary'
import ButtonOutline from './ButtonOutline'

export default {
  title: 'Inputs/Button',
  decorators: [
    (Story) => (
      <div style={{ padding: '3em', maxWidth: '300px', margin: '0 auto' }}>
        <Story />
      </div>
    ),
  ],
}

export const Primary = () => (
  <ButtonPrimary>
    <a href="#">Add Elliot for Water to Chrome</a>
  </ButtonPrimary>
)

export const Outline = () => <ButtonOutline>Subscribe</ButtonOutline>
