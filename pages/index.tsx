import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import useTranslation from 'next-translate/useTranslation'
import { isChrome } from 'react-device-detect'
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
import Accordion from '../components/Accordion/Accordion'

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
  const { homePage } = await fetchContenful(
    'home',
    `
  {
    homePage(id: "fl7zyfAyVPWvG3qJBuspf", preview: false){
      searchFieldTitle,
      counterTitle,
    	intro {
        title,
        content { 
        	json,
        },
        image {
          title,
          url
        }
      },
    	video {
        title,
        url
      },
    	howItWorks,
      howItWorksDescription,
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
      faqTitle,
      faqImage {
        url,
        title
      },
      faqListCollection {
        items {
          title,
          text,
          tags
        }
      },
    	newsletterTitle
  }    
}`
  )

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
    howItWorksDescription,
    howItWorksCardsCollection,
    waterGoal,
    faqTitle,
    faqImage,
    faqListCollection,
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
                <a href='#introSection'>
                  <FiArrowDownCircle />
                </a>
              </div>
            </div>
          </section>

          <section className={styles.introContainer} id='introSection'>
            <div className={styles.introBox}>
              <div className={styles.introText}>
                <h2 className={styles.introTitle}>{intro.title}</h2>
                <div className={styles.introDescription}>{documentToReactComponents(intro.content.json)}</div>
              </div>
              <div className={styles.introPic} style={{ backgroundImage: `url(${intro.image.url})` }} />
            </div>
            <svg
              className={styles.svgDiagonal}
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 100 100'
              preserveAspectRatio='none'
            >
              <polygon fill='var(--lightAzureBackground)' points='0,0 0,100 100,100' />
            </svg>
          </section>

          <section className={styles.videoSection}>
            {isChrome ? (
              <video className={styles.video} controls playsInline poster='/videos/thumb_howItWorks.png'>
                <source src={video.url} type='video/mp4' />
                <source src='/videos/howItWorks.ogg' type='video/ogg' />
                <source src='/videos/howItWorks.webm' type='video/webm' />
                Uh oh! Your browser does not support HTML5 videos
              </video>
            ) : (
              <video className={styles.video} controls playsInline>
                <source src={video.url} type='video/mp4' />
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

          <section className={classnames(styles.sections, styles.howItWorks)}>
            <div className={styles.centerBox}>
              <h2 className={styles.howItWorksTitle}>{howItWorks}</h2>
              <h3 className={styles.howItWorksDescription}>{howItWorksDescription}</h3>
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
              <polygon fill='var(--lightAzureBackground)' points='0,100 100,0 100,100' />
            </svg>
          </section>

          <section className={classnames(styles.sections, styles.bgGrey)}>
            <div className={styles.centerBox}>
              <h2>{waterGoal.title}</h2>
              <div>{documentToReactComponents(waterGoal.content.json)}</div>
            </div>
            <svg
              className={styles.svgDiagonal}
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 100 100'
              preserveAspectRatio='none'
            >
              <polygon fill='white' points='0,0 0,100 100,100' />
            </svg>
          </section>

          <section className={classnames(styles.sections)}>
            <div className={classnames(styles.centerBox, styles.accordionWrap)}>
              <h2>{faqTitle}</h2>
              <div className={styles.accordionSection}>
                <div className={styles.accordionImage}>
                  <img src={faqImage.url} alt={faqImage.title} />
                </div>
                <Accordion list={faqListCollection.items} />
              </div>
            </div>
          </section>

          <section className={classnames(styles.sections, styles.newsletterSection)}>
            <div className={styles.centerBox}>
              <h2>{newsletterTitle}</h2>
              <div className='divider' />
              <SubscribeForm
                big
                customStyle={{
                  background: 'var(--elliotCta)',
                  color: 'white',
                  backgroundHover: 'var(--elliotCta)',
                  colorHover: 'white',
                }}
              />
            </div>
          </section>
        </>
      )}
    </Layout>
  )
}
export default Home
