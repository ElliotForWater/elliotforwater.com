import React from 'react'
import Layout from './Layout'

export default { title: 'Layout/Container' }

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
