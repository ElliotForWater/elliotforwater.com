import React from 'react'
import ButtonPrimary from './ButtonPrimary'
import ButtonOutline from './ButtonOutline'

export default {
  title: 'Inputs/Button',
  decorators: [
    (Story: React.FC) => (
      <div style={{ padding: '40px', margin: '0 auto' }}>
        <Story />
      </div>
    )
  ]
}

export const Primary = () => (
  <>
    <ButtonPrimary>
      <a href='#'>Add Elliot for Water to Chrome</a>
    </ButtonPrimary>

    <p style={{ margin: '40px 0 10px' }}>Fluid - full width</p>
    <ButtonPrimary fluid>
      <a href='#'>Add Elliot for Water to Chrome</a>
    </ButtonPrimary>
  </>
)

export const Outline = () => <ButtonOutline>Subscribe</ButtonOutline>
