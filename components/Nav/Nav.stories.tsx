import React from 'react'
import NavComponent from './Nav'

export default {
  title: 'Components/Nav',
  decorators: [
    (Story: React.FC) => (
      <div style={{ marginTop: '50px', maxWidth: '300px', margin: '0 auto' }}>
        <Story />
      </div>
    ),
  ],
}

export const Nav = () => <NavComponent />
