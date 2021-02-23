import React, { FC, useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import useTranslation from 'next-translate/useTranslation'
import { isChrome } from 'react-device-detect'
import Layout from '../components/Layout/Layout'
import SearchBar from '../components/SearchBar/SearchBar'
import ButtonAddToBrowser from '../components/Buttons/ButtonAddToBrowser'
import styles from './index.module.css'

let Odometer = null

function getLitersOfWater(litersOfWaterPerMillisecond) {
  // Set dates from when we started delivering water until today
  const dateStart = new Date('03/28/2020')
  const dateNow = new Date()
  // Calculate the number of seconds between the two dates
  const millisecondsDifference = dateNow.getTime() - dateStart.getTime()

  // Calculate the number of liters
  return millisecondsDifference / litersOfWaterPerMillisecond
}

const App: FC = () => {
  const { t } = useTranslation()
  const [odometerValue, setOdometerValue] = useState<number>(0)

  useEffect(() => {
    Odometer = dynamic(import('react-odometerjs') as any, {
      ssr: false,
      loading: () => <p>0</p>,
    })

    const litersOfWaterPerMillisecond = 20000
    setOdometerValue(getLitersOfWater(litersOfWaterPerMillisecond))

    const timerInterval = setInterval(() => {
      setOdometerValue(getLitersOfWater(litersOfWaterPerMillisecond))
    }, litersOfWaterPerMillisecond)

    return () => clearInterval(timerInterval)
  }, [])

  return (
    <Layout pageTitle={t('home:pageTitle')} pageDescription={t('home:pageDescription')} isHome fluid>
      <section className='search'>
        <div className='logo-main'>
          <h1 className='logo-main__title'>
            <img
              className='logo-main__img'
              src='/images/HEADER-LOGO.svg'
              alt='Elliot For Water'
              title='Elliot For Water'
            />
          </h1>
          <p className='logo-main__subtitle'>{t('common:for_water')}</p>
        </div>
        <div className={styles.searchWrap}>
          <SearchBar big />
        </div>
        <div className='home-text'>
          <h2 className='home-text__title'>{t('home:title')}</h2>
          <p className='home-text__caption'>{t('home:caption')}</p>
          <div className='donated-water-wrapper'>
            {Odometer !== null && (
              <Odometer
                // @ts-ignore
                value={odometerValue}
                format='(,ddd)'
                duration={1000}
              />
            )}
            <p className='donated-water-text'>{t('home:liter_of_water')} </p>
          </div>
          <div className='cta'>
            <ButtonAddToBrowser />
          </div>
          <div className='show-more'>
            <a href='#how-it-works' className='show-more__link'>
              <i className='chevron' />
            </a>
          </div>
        </div>
      </section>

      <section id='how-it-works' className='section section--centered section__how-it-works'>
        <div className='section-center'>
          <h2 className='section__title'>{t('home:how_works.title')}</h2>
          <div className='home-text'>
            <p className='home-text__caption'>{t('home:how_works.description')}</p>
          </div>
          <div className='hidden-md hidden-lg'>
            <div id='myCarousel' className='carousel slide' data-ride='carousel'>
              {/* <!-- Indicators --> */}
              <ol className='carousel-indicators'>
                <li data-target='#myCarousel' data-slide-to='0' className='active' />
                <li data-target='#myCarousel' data-slide-to='1' />
                <li data-target='#myCarousel' data-slide-to='2' />
              </ol>

              {/* <!-- Wrapper for slides --> */}
              <div className='carousel-inner'>
                <div className='item active'>
                  <div className='carousel-card'>
                    <img className='carousel-card__img' src='/images/how-it-works/search.svg' alt='Search' />
                  </div>
                </div>

                <div className='item'>
                  <div className='carousel-card'>
                    <img className='carousel-card__img' src='/images/how-it-works/give.svg' alt='Give' />
                  </div>
                </div>

                <div className='item'>
                  <div className='carousel-card'>
                    <img className='carousel-card__img' src='/images/how-it-works/change.svg' alt='Change' />
                  </div>
                </div>
              </div>

              {/* <!-- Left and right controls --> */}
              <a className='left carousel-control' href='#myCarousel' data-slide='prev'>
                <span className='glyphicon glyphicon-chevron-left' />
                <span className='sr-only'>{t('common:previous')}</span>
              </a>
              <a className='right carousel-control' href='#myCarousel' data-slide='next'>
                <span className='glyphicon glyphicon-chevron-right' />
                <span className='sr-only'>{t('common:next')}</span>
              </a>
            </div>
          </div>

          <div className='hidden-sm hidden-xs'>
            <div className='flex flex--center'>
              <div className='card'>
                <img className='card__img' src='/images/how-it-works/search.svg' alt='Search' />
              </div>
              <div className='card'>
                <img className='card__img' src='/images/how-it-works/give.svg' alt='Give' />
              </div>
              <div className='card'>
                <img className='card__img' src='/images/how-it-works/change.svg' alt='Change' />
              </div>
            </div>
          </div>
        </div>
        <div className='cta'>
          <ButtonAddToBrowser />
        </div>
      </section>

      {/* Video */}
      <section className='section section--centered'>
        {isChrome ? (
          <video className='video' controls playsInline poster='/videos/thumb_howItWorks.png'>
            <source src='/videos/howItWorks.mp4' type='video/mp4' />
            <source src='/videos/howItWorks.ogg' type='video/ogg' />
            <source src='/videos/howItWorks.webm' type='video/webm' />
            Uh oh! Your browser does not support HTML5 videos
          </video>
        ) : (
          <div>
            <video className='video' controls playsInline>
              <source src='/videos/howItWorks.mp4' type='video/mp4' />
              <source src='/videos/howItWorks.ogg' type='video/ogg' />
              <source src='/videos/howItWorks.webm' type='video/webm' />
              Uh oh! Your browser does not support HTML5 videos
            </video>
          </div>
        )}
      </section>

      <style jsx>
        {`
          /* ==================================================
          Logo
        ================================================== */
          .logo-main {
            text-align: center;
            margin: 0 2em;
          }

          .logo-main__link {
          }

          .logo-main__img {
            height: auto;
            width: 100%;
            max-width: 10em;
          }

          .logo-main__subtitle {
            text-transform: uppercase;
            font-size: 12px;
            font-weight: 700;
            letter-spacing: 4px;
            text-shadow: 0 2px 3px #c3c2c245;
            margin-bottom: 33px;
          }

          /* ==================================================
            Donated water section
          ================================================== */
          .donated-water-wrapper {
            margin: 33px auto;
            text-align: center;
          }

          .odometer {
            color: var(--elliotPrimary);
            font-size: 20px;
            letter-spacing: 0.3em;
            font-family: var(--fontCommon);
            font-weight: 700;
          }

          .donated-water-text {
            color: #868383d4;
            font-size: 12px;
          }

          /* ==================================================
            Home Text and Buttons
          ================================================== */
          .search {
            background-image: url('/images/water_bg4.png');
            background-repeat: no-repeat;
            background-position: bottom;
            height: 100vh;
          }

          .home-text {
            text-align: center;
            margin: 0 auto;
            margin-bottom: 8px;
            max-width: 85%;
          }

          .home-text__title {
            font-size: 16px;
            text-shadow: 1px 3px 5px #6f6e6e0f;
          }

          .home-text__caption {
            margin: 0;
            font-size: 14px;
          }

          .home-text__chrome {
            display: none;
          }

          .show-more__link {
            margin-top: 70px;
          }

          /* ==================================================
            Show More
          ================================================== */
          .show-more {
            text-align: center;
          }

          .show-more__title {
            margin-bottom: 0;
            font-size: 9px;
          }

          .chevron {
            position: relative;
            display: block;
            height: 20px;
            right: 10px;
            top: -2em;
          }

          .show-more__link {
            display: inline-block;
          }

          .show-more__link:hover {
            text-decoration: none;
          }

          .chevron::before,
          .chevron::after {
            position: absolute;
            display: block;
            content: '';
            border: 10px solid transparent;
          }

          .chevron::before {
            top: 0;
          }

          .chevron::after {
            top: -2px;
            border-top-color: var(--elliotSecondary);
          }

          /* ==================================================
            How It Works section
          ================================================== */
          .section__title {
            font-size: 38px;
          }

          .section__how-it-works {
            height: 58em;
            height: 100vh;
            min-height: 50em;
            margin-top: 20%;
          }

          .carousel {
            width: fit-content;
            margin: 0 auto;
          }

          .carousel-inner {
            margin: 0 auto;
            margin-left: -24px;
          }

          .carousel-card {
            width: 100%;
            padding: 10px;
            text-align: left;
            margin: auto;
          }

          .carousel-card__img {
            height: 25em;
            padding: 20px;
          }

          .carousel-indicators {
            bottom: -10px;
          }

          .carousel-indicators li {
            border: 1px solid #000;
          }

          .section__how-it-works .elliot-btn-group {
            margin-top: 10%;
          }

          .section__how-it-works .elliot-btn-group :global(div:first-child) {
            margin-right: 20px;
          }

          /* ==================================================
          Video section
        ================================================== */
          .video {
            width: 100%;
            height: 100%;
            margin-bottom: -5px;
          }

          /* Override bootrstrap carousel styles */
          .carousel-control.left {
            background-image: none;
            left: -22px;
            background: white;
          }

          .carousel-control.right {
            background-image: none;
            right: 4px;
            background: white;
          }

          .carousel-control .icon-prev,
          .carousel-control .icon-next,
          .carousel-control .glyphicon-chevron-left,
          .carousel-control .glyphicon-chevron-right {
            position: relative;
            left: auto;
          }

          .carousel-indicators .active {
            background-color: #3fa2b8;
          }

          /* ==================================================
          Responsive Media
        ================================================== */
          @media (min-width: 400px) {
            .logo-main__subtitle {
              font-size: 14px;
            }

            .home-text__title {
              margin-top: 0px;
              margin-bottom: 10px;
              font-size: 1.4em;
            }

            .section-center {
              width: 80%;
            }
          }

          @media (min-width: 768px) {
            .logo-main__subtitle {
              font-size: 17px;
            }

            .section__search {
              margin-top: 0;
            }

            .search__input {
              height: 3em;
            }

            .main-search-wrapper {
              margin: 22px auto 44px;
            }

            .odometer {
              font-size: 26px;
            }

            .donated-water-text {
              font-size: 16px;
            }

            .donated-water-wrapper {
              margin: 44px 0 22px;
            }

            .home-text {
              margin-bottom: 14px;
              max-width: 70%;
            }

            .home-text__title {
              font-size: 30px;
            }

            .home-text__caption {
              font-size: 16px;
            }

            .home-text__chrome {
              display: inline-block;
              font-size: 12px;
            }

            .search-form-container {
              width: auto;
            }

            .home-text .elliot-btn-group {
              margin-top: 14px;
            }

            .show-more__link {
              margin-top: 8px;
              margin-left: -13px;
            }

            .show-more .show-more__link .chevron {
              position: relative;
              display: inherit;
              height: auto;
              right: 0;
              top: 0;
            }

            .cta {
              margin-top: 20px;
            }
          }

          @media (min-width: 900px) {
            .home-text {
              max-width: 55%;
            }
          }
        `}
      </style>
    </Layout>
  )
}
export default App
