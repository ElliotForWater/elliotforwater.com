import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import useTranslation from 'next-translate/useTranslation'
import { isChrome } from 'react-device-detect'
// import ReactMarkdown from 'react-markdown'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { FiArrowDownCircle } from 'react-icons/fi'
import classnames from 'classnames'
import fetchContenful from '../helpers/_fetchContentful'
import Layout from '../components/Layout/Layout'
import SearchBar from '../components/SearchBar/SearchBar'
import ButtonAddToBrowser from '../components/Buttons/ButtonAddToBrowser'
import Loader from '../components/Loader/Loader'
import Card from '../components/Card/Card'
import SubscribeForm from '../components/Forms/Subscribe/SubscribeForm'

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
          description,
          image {
            title, 
            url
          }
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

  console.log(homePage.howItWorksCardsCollection.items)
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

  const {
    searchFieldTitle,
    counterTitle,
    intro,
    video,
    howItWorks,
    howItWorksCardsCollection,
    waterGoal,
    newsletterTitle,
  } = homePage

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
            <div className={styles.ctaContainer}>
              <h1 className={styles.ctaTitle}>{searchFieldTitle}</h1>
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
              <div className={styles.showMoreContainer}>
                <FiArrowDownCircle />
              </div>
            </div>
          </section>

          <section className={styles.waveSection}>
            {/* <svg className={styles.waveBackground} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
                <path
                  fill='var(--elliotSecondary)'
                  fill-opacity='1'
                  d='M0,32L60,32C120,32,240,32,360,42.7C480,53,600,75,720,90.7C840,107,960,117,1080,117.3C1200,117,1320,107,1380,101.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z'
                ></path>
              </svg> */}
            {/* <svg className={styles.waveBackground} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
                <path
                  fill='var(--elliotSecondary)'
                  fill-opacity='1'
                  d='M0,128L60,149.3C120,171,240,213,360,234.7C480,256,600,256,720,240C840,224,960,192,1080,170.7C1200,149,1320,139,1380,133.3L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z'
                ></path>
              </svg> */}
            <svg className={styles.waveBackground} viewBox='0 0 1440 600' xmlns='http://www.w3.org/2000/svg'>
              {/* <path
                  d='M 0,600 C 0,600 0,150 0,150 C 144.28571428571428,134.03571428571428 288.57142857142856,118.07142857142858 395,131 C 501.42857142857144,143.92857142857142 569.9999999999999,185.75 673,190 C 776.0000000000001,194.25 913.4285714285713,160.92857142857144 1047,148 C 1180.5714285714287,135.07142857142856 1310.2857142857142,142.53571428571428 1440,150 C 1440,150 1440,600 1440,600 Z'
                  stroke='none'
                  strokeWidth='0'
                  fill='#5082af66'
                />
                <path
                  d='M 0,600 C 0,600 0,300 0,300 C 137.10714285714286,299.57142857142856 274.2142857142857,299.14285714285717 381,313 C 487.7857142857143,326.85714285714283 564.25,355 692,344 C 819.75,333 998.7857142857142,282.85714285714283 1132,269 C 1265.2142857142858,255.14285714285717 1352.607142857143,277.57142857142856 1440,300 C 1440,300 1440,600 1440,600 Z'
                  stroke='none'
                  stroke-width='0'
                  fill='#5082af88'
                ></path> */}
              <path
                d='M 0,600 C 0,600 0,450 0,450 C 107.78571428571428,439.3571428571429 215.57142857142856,428.7142857142857 347,437 C 478.42857142857144,445.2857142857143 633.4999999999999,472.50000000000006 746,482 C 858.5000000000001,491.49999999999994 928.4285714285716,483.28571428571433 1037,475 C 1145.5714285714284,466.71428571428567 1292.7857142857142,458.35714285714283 1440,450 C 1440,450 1440,600 1440,600 Z'
                stroke='none'
                stroke-width='0'
                fill='var(--primaryDarkerTest)'
              />
            </svg>
            {/* <svg
                className={styles.waveBackground}
                height='100%'
                width='100%'
                id='svg'
                viewBox='0 0 1440 700'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M 0,700 C 0,700 0,350 0,350 C 125.96428571428572,314.1071428571429 251.92857142857144,278.2142857142857 380,268 C 508.07142857142856,257.7857142857143 638.2500000000001,273.25000000000006 746,294 C 853.7499999999999,314.74999999999994 939.0714285714287,340.7857142857143 1051,351 C 1162.9285714285713,361.2142857142857 1301.4642857142858,355.6071428571429 1440,350 C 1440,350 1440,700 1440,700 Z'
                  stroke='none'
                  stroke-width='0'
                  fill='#5082afff'
                ></path>
              </svg> */}
          </section>

          <section className={styles.introContainer}>
            <div className={styles.introBox}>
              <div className={styles.introText}>
                <h2 className={styles.introTitle}>{intro.title}</h2>
                <div className={styles.introDescription}>{documentToReactComponents(intro.content.json)}</div>
              </div>
              <div>Some illustration here</div>
            </div>
            <svg
              className={styles.svgDiagonal}
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 100 100'
              preserveAspectRatio='none'
            >
              <polygon fill='var(--lightgreyTest)' points='0,0 0,100 100,100' />
            </svg>
          </section>

          <section className={styles.videoSection}>
            {isChrome ? (
              <video className={styles.video} controls playsInline poster='/videos/thumb_howItWorks.png'>
                <source src='/videos/howItWorks.mp4' type='video/mp4' />
                <source src='/videos/howItWorks.ogg' type='video/ogg' />
                <source src='/videos/howItWorks.webm' type='video/webm' />
                Uh oh! Your browser does not support HTML5 videos
              </video>
            ) : (
              <video className={styles.video} controls playsInline>
                <source src='/videos/howItWorks.mp4' type='video/mp4' />
                <source src='/videos/howItWorks.ogg' type='video/ogg' />
                <source src='/videos/howItWorks.webm' type='video/webm' />
                Uh oh! Your browser does not support HTML5 videos
              </video>
            )}
            <svg
              className={styles.svgDiagonal}
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 100 100'
              preserveAspectRatio='none'
            >
              <polygon fill='#fff' points='0,100 100,0 100,100' />
            </svg>
          </section>

          <section className={classnames(styles.bgGrey, styles.sections, styles.howItWorks)}>
            <div className={styles.centerBox}>
              <h2 className={styles.howItWorksTitle}>{howItWorks}</h2>
              <h3 className={styles.howItWorksDescription}>
                We can write here other interesting stuff about how it works
              </h3>
            </div>
            <div className={styles.cardWrap}>
              {howItWorksCardsCollection.items.map((card) => (
                <Card title={card.title} text={card.description} image={card.image} key={card.title} />
              ))}
            </div>
            <svg
              className={styles.svgDiagonal}
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 100 100'
              preserveAspectRatio='none'
            >
              <polygon fill='var(--lightgreyTest)' points='0,100 100,0 100,100' />
            </svg>
          </section>

          <section className={classnames(styles.sections, styles.bgGrey)}>
            <div className={styles.centerBox}>
              <h2>{waterGoal.title}</h2>
              <div>{documentToReactComponents(waterGoal.content.json)}</div>
            </div>
          </section>

          <section className={classnames(styles.newsletterSection, styles.sections)}>
            <div className={styles.centerBox}>
              <h2>{newsletterTitle}</h2>
              <div className='divider' />
              <SubscribeForm big />
            </div>
          </section>
        </>
      )}
    </Layout>
  )
}
export default Home
