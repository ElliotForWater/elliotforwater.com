import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import useTranslation from 'next-translate/useTranslation'
import { isChrome } from 'react-device-detect'
// import ReactMarkdown from 'react-markdown'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import fetchContenful from '../helpers/_fetchContentful'
import Layout from '../components/Layout/Layout'
import SearchBar from '../components/SearchBar/SearchBar'
import ButtonAddToBrowser from '../components/Buttons/ButtonAddToBrowser'
import Loader from '../components/Loader/Loader'

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

Home.getInitialProps = async () => {
  // RichFormat text with Graphql: https://www.contentful.com/blog/2021/04/14/rendering-linked-assets-entries-in-contentful/
  const { homePage } = await fetchContenful(`
  {
    homePage(id: "fl7zyfAyVPWvG3qJBuspf", preview: false){
      searchFieldTitle,
      counterTitle,
    	intro {
        title,
        content { 
        	json,
        },
      },
    	video {
        title,
        url
      },
    	howItWorks,
    	howItWorksCardsCollection {
        items {
          title,
          description
        }
      },
    	waterGoal {
        title,
        content{ 
        	json,
        },
      },
    	newsletterTitle
  }    
}`)

  return {
    homePage: homePage,
  }
}

function Home({ homePage }) {
  const { t } = useTranslation()
  const [odometerValue, setOdometerValue] = useState<number>(0)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    if (homePage) {
      setIsLoading(false)
    }

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

  const { searchFieldTitle, counterTitle, intro, video, howItWorks, waterGoal, newsletterTitle } = homePage

  return (
    <Layout pageTitle={t('home:pageTitle')} pageDescription={t('home:pageDescription')} isHome fluid>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <section className={styles.searchBarSection}>
            <div className={styles.logo}>
              <div className={styles.logoImgWrap}>
                <img
                  className={styles.logoImg}
                  src='/images/HEADER-LOGO.svg'
                  alt='Elliot For Water'
                  title='Elliot For Water'
                />
              </div>
              <p className={styles.logoSubtitle}>{t('common:for_water')}</p>
            </div>
            <div className={styles.searchWrap}>
              <SearchBar big />
            </div>
            <div className={styles.introContainer}>
              <h1 className={styles.introTitle}>{searchFieldTitle}</h1>
              <div className={styles.counterContainer}>
                {Odometer !== null && (
                  <Odometer
                    // @ts-ignore
                    value={odometerValue}
                    format='(,ddd)'
                    duration={1000}
                  />
                )}
                <p className={styles.counterText}>{counterTitle} </p>
              </div>
              <div className={styles.cta}>
                <ButtonAddToBrowser />
              </div>
              <div className='show-more'>
                <a href='#how-it-works' className='show-more__link'>
                  <i className='chevron' />
                </a>
              </div>
            </div>
          </section>

          <section>
            <h2>{intro.title}</h2>
            <div>{documentToReactComponents(intro.content.json)}</div>
            {isChrome ? (
              <video className={styles.video} controls playsInline poster='/videos/thumb_howItWorks.png'>
                <source src='/videos/howItWorks.mp4' type='video/mp4' />
                <source src='/videos/howItWorks.ogg' type='video/ogg' />
                <source src='/videos/howItWorks.webm' type='video/webm' />
                Uh oh! Your browser does not support HTML5 videos
              </video>
            ) : (
              <div>
                <video className={styles.video} controls playsInline>
                  <source src='/videos/howItWorks.mp4' type='video/mp4' />
                  <source src='/videos/howItWorks.ogg' type='video/ogg' />
                  <source src='/videos/howItWorks.webm' type='video/webm' />
                  Uh oh! Your browser does not support HTML5 videos
                </video>
              </div>
            )}
          </section>

          <section>
            <h2>{howItWorks}</h2>3 cards here
          </section>

          <section>
            <h2>{waterGoal.title}</h2>
            <p>{documentToReactComponents(waterGoal.content.json)}</p>
          </section>

          <section>
            <h2>{newsletterTitle}</h2>
            Newsletter form big
          </section>

          {/* <section id='how-it-works' className='section section--centered section__how-it-works'>
        <div className='section-center'>
          <h2 className='section__title'>{t('home:how_works.title')}</h2>
          <div className='home-text'>
            <p className='home-text__caption'>{t('home:how_works.description')}</p>
          </div>
          <div className='hidden-md hidden-lg'>
            <div id='myCarousel' className='carousel slide' data-ride='carousel'>
              <ol className='carousel-indicators'>
                <li data-target='#myCarousel' data-slide-to='0' className='active' />
                <li data-target='#myCarousel' data-slide-to='1' />
                <li data-target='#myCarousel' data-slide-to='2' />
              </ol>

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
      </section> */}
        </>
      )}
      <style jsx>
        {`
          /* ==================================================
            Home Text and Buttons
          ================================================== */

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
            .section-center {
              width: 80%;
            }
          }

          @media (min-width: 768px) {
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
          }
        `}
      </style>
    </Layout>
  )
}
export default Home
