import React from 'react'
import Layout from './Layout'
import { withNextRouter } from 'storybook-addon-next-router'

export default {
  title: 'Layout/Container',
  decorators: [(Story) => <Story />, withNextRouter],
}

export const Container = () => (
  <div style={{ background: '#673AB7', color: '#fff' }}>
    <Layout pageTitle='home' pageDescription='some description'>
      <h1>I'm the title</h1>
    </Layout>
  </div>
)

export const FluidContainer = () => (
  <div style={{ background: '#673AB7', color: '#fff' }}>
    <Layout fluid pageTitle='home' pageDescription='some description'>
      <h1>I'm the title</h1>
    </Layout>
  </div>
)
