import React, { FC } from 'react'
import Layout from '../components/Layout/Layout'
import ButtonPrimary from '../components/Buttons/ButtonPrimary'

const App: FC = () => {
  return (
    <Layout pageTitle='Home' pageDescription='Elliot for Water Homepage'>
      <h1>Hello Elliot for Water</h1>
      <ButtonPrimary>
        <a href='#'>Add Elliot for Water to Chrome</a>
      </ButtonPrimary>
    </Layout>
  )
}
export default App
