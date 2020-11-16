import React, { FC } from 'react'
import useTranslation from 'next-translate/useTranslation'
import Layout from '../components/Layout/Layout'
import SearchBar from '../components/SearchBar/SearchBar'
import ButtonPrimary from '../components/Buttons/ButtonPrimary'
import styles from './index.module.css'

const App: FC = () => {
  const { t } = useTranslation()

  return (
    <Layout pageTitle='Home' pageDescription='Elliot for Water Homepage' isHome fluid>
      <section>
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
            <div className='odometer' />
            <p className='donated-water-text'>{t('home:liter_of_water')} </p>
          </div>
          <div className={styles.hideMobile}>
            <div className='elliot-btn-group'>
              <ButtonPrimary
                big
                linkHref='https://chrome.google.com/webstore/detail/elliot-for-water/ddfnnfelkcabbeebchaegpcdcmdekoim'
              >
                {t('common:addToChrome')}
              </ButtonPrimary>
            </div>
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
          <img className='background background--50' src='/images/waves.png' alt='Water' />
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
                    <img
                      className='carousel-card__img'
                      src='/images/how-it-works/search.svg'
                      alt='Search'
                    />
                  </div>
                </div>

                <div className='item'>
                  <div className='carousel-card'>
                    <img
                      className='carousel-card__img'
                      src='/images/how-it-works/give.svg'
                      alt='Give'
                    />
                  </div>
                </div>

                <div className='item'>
                  <div className='carousel-card'>
                    <img
                      className='carousel-card__img'
                      src='/images/how-it-works/change.svg'
                      alt='Change'
                    />
                  </div>
                </div>
              </div>

              {/* <!-- Left and right controls --> */}
              <a className='left carousel-control' href='#myCarousel' data-slide='prev'>
                <span className='glyphicon glyphicon-chevron-left' />
                <span className='sr-only'>Previous</span>
              </a>
              <a className='right carousel-control' href='#myCarousel' data-slide='next'>
                <span className='glyphicon glyphicon-chevron-right' />
                <span className='sr-only'>Next</span>
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

        <div className={styles.hideMobile}>
          <div className='elliot-btn-group'>
            <ButtonPrimary
              big
              linkHref='https://chrome.google.com/webstore/detail/elliot-for-water/ddfnnfelkcabbeebchaegpcdcmdekoim'
            >
              {t('common:addToChrome')}
            </ButtonPrimary>
            <ButtonPrimary big linkHref='/about'>
              {t('common:learn_more')}
            </ButtonPrimary>
          </div>
        </div>
      </section>

      {/* <!-- Projects --> */}
      <section className='section section--centered'>
        <img className='projects__img shadow' src='/images/video.png' alt='Change' />
        <h3 className='projects__title'>{t('home:projects.title')}</h3>
        <br />
        <p className='projects__caption' />
      </section>

      {/* <cookie-policy /> */}

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
          .home-text {
            text-align: center;
            margin: 0 auto;
            margin-bottom: 8px;
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
          How It Works section
        ================================================== */
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
          Projects section
        ================================================== */
          .projects__img {
            margin: 10% auto;
            max-width: 90%;
            border-radius: 30px;
          }

          .projects__title {
            position: absolute;
            top: 45%;
            width: 100%;
            font-weight: bold;
            font-size: 2.2vw;
            letter-spacing: 0.45px;
            text-align: center;
            color: #fff;
          }

          .projects__caption {
            position: absolute;
            width: 100%;
            font-size: 1.1vw;
            letter-spacing: 0.45px;
            text-align: center;
            color: #fff;
            margin-top: -32%;
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

            .odometer {
              font-size: 22px;
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
          }
        `}
      </style>
    </Layout>
  )
}
export default App
