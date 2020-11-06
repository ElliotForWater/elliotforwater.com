import React from 'react'
import Layout from '../components/Layout/Layout'
import ButtonPrimary from '../components/Buttons/ButtonPrimary'

function WaterPage () {
  return (
    <Layout fluid pageTitle='404' pageDescription='404 error page - Elliot for Water'>
      <section className='wrapper'>
        <h1>Don't drown in a glass of water!</h1>
        <p>Look like the page you are looking for doesn't exist</p>
        <div className='buttonWrapper'>
          <ButtonPrimary big linkHref='/'>
            Go back to Homepage
          </ButtonPrimary>
        </div>

        <img src='/images/404.png' />
      </section>
      <style jsx>
        {`
          .wrapper {
            text-align: center;
            background: var(--footerBg);
            padding: 30px 20px;
          }

          .wrapper h1 {
            line-height: 1;
            margin-bottom: 16px;
          }

          .wrapper p {
            margin-bottom: 16px;
          }

          .wrapper img {
            width: 100%;
            max-width: 400px;
            margin-left: 140px;
          }

          .buttonWrapper {
            margin-bottom: 16px;
          }

          @media (min-width: 768px) {
            .wrapper {
              padding: 60px 20px;
            }

            .wrapper p {
              margin-bottom: 24px;
            }

            .buttonWrapper {
              margin-bottom: 24px;
            }
          }
        `}
      </style>
    </Layout>
  )
}

export default WaterPage
