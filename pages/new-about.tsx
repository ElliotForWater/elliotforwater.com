import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import Layout from '../components/Layout/Layout'
import ButtonAddToBrowser from '../components/Buttons/ButtonAddToBrowser'
import fetchContenful from '../helpers/fetchContentful'

function About({ quote, firstSectionTitle }) {
  const { t } = useTranslation()

  return (
    <Layout pageTitle={t('about:pageTitle')} pageDescription={t('about:pageTitle')} fluid>
      <section className='hero'>
        <h1>
          <span className='blueText'>{t('about:title1')}</span>
          {t('about:title2')}
          <span className='blueText'>{t('about:title3')}</span>
          {t('about:title4')}
        </h1>
      </section>
      <section>
        <h2>Mission</h2>
        <p>some info about our mission</p>
        <ButtonAddToBrowser />
      </section>
      <section>
        <blockquote>{quote}</blockquote>
      </section>
      <section>
        <div className='currentProjectWrap'>
          <div>
            <h3>Project</h3>
            <div>info about the project</div>
          </div>
          <div>image gallery</div>
        </div>
        <div className='nextProjectWrap'>
          <div className='nextProject'>Ghana</div>
          <div className='nextProject'>India</div>
        </div>
        <ButtonAddToBrowser />
      </section>
      <section>
        <h2>Our Founder</h2>
        <div className='founderWrap'>
          <img src='' alt='Andrea DeMichelis' />
          <p />
        </div>
      </section>

      <style jsx>
        {`
          .section {
            height: 100vh;
          }

          .hero {
            text-align: right;
          }

          .blueText {
            color: var(--elliot-primary-color, #4aacc2);
          }

          .hero:after {
            content: '';
            width: 100%;
            height: 100%;
            background: url('/images/waves.png') no-repeat;
            position: absolute;
            bottom: 0;
            right: 0;
          }
        `}
      </style>
    </Layout>
  )
}

export async function getStaticProps() {
  const { aboutUsPage } = await fetchContenful(`{
    aboutUsPage(id: "74N0U1LNjfceeBVytfHC93", preview: false){
        quote,
        firstSectionTitle
    }
  }`)
  console.log('data', aboutUsPage)

  return {
    props: {
      quote: aboutUsPage.quote,
      firstSectionTitle: aboutUsPage.firstSectionTitle,
    },
  }
}

export default About
