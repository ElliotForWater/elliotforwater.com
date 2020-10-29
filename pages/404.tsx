import React from 'react'
import Layout from '../components/Layout/Layout'
import ButtonPrimary from '../components/Buttons/ButtonPrimary'

function WaterPage () {
  return (
    <Layout fluid pageTitle='404' pageDescription='404 error page - Elliot for Water'>
      <section className='wrapper'>
        <h1>The page you are looking for doesn't exist but don't drown in a glass of water!</h1>
        <p>We help you find the way back home</p>
        <div>
          <ButtonPrimary big linkHref='/'>
            Go back to Homepage
          </ButtonPrimary>
        </div>

        <img src='/images/404.svg' />
      </section>
      <style jsx>{`
        .wrapper {
        }
      `}
      </style>
    </Layout>
  )
}

export default WaterPage
