import React, { useEffect } from 'react'
import useTranslation from 'next-translate/useTranslation'
import Trans from 'next-translate/Trans'
import Layout from '../components/Layout/Layout'
import ButtonPrimary from '../components/Buttons/ButtonPrimary'

const ComponentSpan = (props) => <p className='facts__text' {...props} />

function About () {
  const { t } = useTranslation()

  useEffect(() => {
    document.getElementById('tel').style.display = 'none'
  }, [])

  return (
    <Layout pageTitle='About us' pageDescription='Who we are - Elliot for Water' fluid>
      <div className='about-header'>
        <p className='about-header__text about-header__text--blue'>{t('about:title1')}</p>
        <p className='about-header__text'>{t('about:title2')}</p>
        <p className='about-header__text about-header__text--blue'>{t('about:title3')}</p>
        <p className='about-header__text'>{t('about:title4')}</p>
      </div>
      <div className='background-wrapper'>
        <img className='background' src='/images/waves.png' alt='Change' />
      </div>
      <div className='show-more show-more--top20'>
        <p className='show-more__title'>{t('common:learn_more')}</p>
        <a href='#learn-more' className='show-more__link'>
          <i className='fas fa-chevron-down show-more__icon' />
        </a>
      </div>
      <section id='learn-more' className='section section--centered learn-more'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='hidden-xs'>
                <div className='facts facts--large'>
                  <div className='flex'>
                    <div>
                      <img className='facts__img' src='/images/geyser.png' alt='Change' />
                    </div>
                    <div className='facts__info'>
                      <p className='facts__title'>{t('about:facts_title')}</p>
                      <p className='facts__text'>{t('about:facts_description1')}</p>
                      <p className='facts__text'>{t('about:facts_description2')}</p>
                      <p className='facts__text'>{t('about:facts_description3')}</p>
                      <p className='facts__text'>{t('about:facts_description4')}</p>
                      <Trans
                        i18nKey='about:facts_description5'
                        components={[
                          /* eslint-disable-next-line react/jsx-key */
                          <ComponentSpan />,
                          /* eslint-disable-next-line react/jsx-key */
                          <a
                            href='https://drive.google.com/drive/folders/12KXoGXsyyvbxRXDOK8BfOVbx-Xv36i9G?usp=sharing'
                            target='_blank'
                          />,
                          /* eslint-disable-next-line react/jsx-key */
                          <a href='https://wellfound.org.uk/' target='_blank' />
                        ]}
                      />
                    </div>
                  </div>
                  <div className='buttonChrome'>
                    <ButtonPrimary
                      big
                      linkHref='https://chrome.google.com/webstore/detail/elliot-for-water/ddfnnfelkcabbeebchaegpcdcmdekoim'
                    >
                      {t('common:addToChrome')}
                    </ButtonPrimary>
                  </div>
                </div>
              </div>
              <div className='hidden-sm hidden-md hidden-lg'>
                <div className='facts facts--small shadow'>
                  <div className='flex'>
                    <div>
                      <img className='facts__img' src='/images/geyser.png' alt='Change' />
                    </div>
                    <div className='facts__info'>
                      <p className='facts__title'>{t('about:about:facts_title')}</p>
                      <p className='facts__text'>{t('about:facts_description1')}</p>
                      <p className='facts__text'>{t('about:facts_description2')}</p>
                      <p className='facts__text'>{t('about:facts_description3')}</p>
                      <p className='facts__text'>{t('about:facts_description4')}</p>
                      <Trans
                        i18nKey='about:facts_description5'
                        components={[
                          /* eslint-disable-next-line react/jsx-key */
                          <ComponentSpan />,
                          /* eslint-disable-next-line react/jsx-key */
                          <a
                            href='https://drive.google.com/drive/folders/12KXoGXsyyvbxRXDOK8BfOVbx-Xv36i9G?usp=sharing'
                            target='_blank'
                          />,
                          /* eslint-disable-next-line react/jsx-key */
                          <a href='https://wellfound.org.uk/' target='_blank' />
                        ]}
                      />
                    </div>
                  </div>
                  <div className='elliot-btn-group'>
                    <a
                      className='btn btn-primary big home-text__link home-text__chrome shadow'
                      href='https://chrome.google.com/webstore/detail/elliot-for-water/ddfnnfelkcabbeebchaegpcdcmdekoim'
                      target='_blank'
                    >
                      {t('common:addToChrome')}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className='show-more show-more--top20'>
        <p className='show-more__title'>{t('about:contact_us')}</p>
        <a href='#contact-us' className='show-more__link'>
          <i className='fas fa-chevron-down show-more__icon' />
        </a>
      </div>
      <section className='section contact-us' id='contact-us'>
        <h2 className='contact-us__title'>{t('about:contact_us')}</h2>
        <form method='post' action='/Contact/ContactUs'>
          <div className='form-row'>
            <div className='form-group col-md-12'>
              <input
                type='tel'
                className='form-control'
                id='tel'
                name='tel'
                placeholder='Telephone'
              />
            </div>
          </div>
          <div className='row'>
            <div className='form-group col-sm-6'>
              <input
                type='text'
                className='form-control'
                id='name'
                name='name'
                placeholder='Name'
                required
              />
            </div>
            <div className='form-group col-sm-6'>
              <input
                type='email'
                className='form-control'
                id='email'
                name='email'
                placeholder='Email'
                required
              />
            </div>
          </div>
          <div className='row'>
            <div className='form-group col-md-12'>
              <input
                type='tel'
                className='form-control'
                id='phone'
                name='phone'
                placeholder='Phone Number'
                required
              />
            </div>
          </div>
          <div className='row'>
            <div className='form-group col-md-12'>
              <textarea
                className='form-control form-control--multiline'
                id='msg'
                name='msg'
                placeholder='Type your message here...'
                rows={10}
                required
              />
            </div>
          </div>
          <div className='form-row'>
            <div className='col-md-12'>
              <ButtonPrimary big>{t('about:send')}</ButtonPrimary>
            </div>
          </div>
          <input name='__RequestVerificationToken' type='hidden' value='' />
        </form>
      </section>
      <style jsx>
        {`
          /* ==================================================
            Header text
          ================================================== */
          .about-header {
            font-size: 50px;
            font-size: 6vw;
            font-weight: bold;
            text-align: right;
            margin-top: 12%;
            margin-right: 7%;
            letter-spacing: -1.5px;
            line-height: 0.8em;
          }

          .about-header__text {
            margin: 0 0 18px 0;
          }
          .about-header__text--blue {
            color: var(--elliot-primary-color, #4aacc2);
          }

          /* ==================================================
            Learm More
          ================================================== */
          .background-wrapper {
            position: relative;
          }

          .show-more--top30 {
            margin-top: 30%;
          }

          .show-more--top20 {
            margin-top: 20%;
          }

          .facts {
            padding: 10px;
            text-align: left;
            display: inline-block;
            background-color: #fff;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          .facts__img {
            height: 50vw;
            margin-right: 10px;
          }

          .facts__info {
            width: 44vw;
            text-align: justify;
          }

          .facts__title {
            font-size: 2vw;
            font-weight: 600;
            letter-spacing: 0em;
            word-spacing: 0.4em;
            line-height: 1.25em;
          }

          .facts__text {
            font-size: 1.5vw;
            letter-spacing: 1px;
            line-height: 1.25em;
          }

          .facts__text a {
            color: var(--elliotPrimary);
          }

          .facts__text--blue {
            margin-top: 2%;
            letter-spacing: 2px;
            color: #48adc3;
            font-weight: bold;
          }

          .buttonChrome {
            margin-top: 20px;
          }

          /* ==================================================
            Contact
          ================================================== */
          .contact-us {
            position: relative;
            text-align: left;
            letter-spacing: 2.5px;
            margin: 15% auto;
            width: 70%;
          }

          .contact-us__title {
            margin-top: 7%;
            font-weight: 700;
          }

          .col-md-12 {
            display: flex;
            justify-content: flex-end;
          }

          /* ==================================================
            Media Styles
          ================================================== */
          @media (max-width: 768px) {
            .learn-more {
              margin: 18% 6%;
            }
            .facts__img {
              height: 26vw;
            }
            .facts__info {
              width: 54vw;
            }
            .facts__title {
              font-size: 2.2vw;
            }
            .facts__text {
              font-size: 1.8vw;
            }
          }

          @media (max-width: 600px) {
            .about-header {
              font-size: 8vw;
            }
            .facts__img {
              height: 30vw;
            }
            .facts__info {
              width: 64vw;
            }
            .facts__title {
              font-size: 2.5vw;
            }
            .facts__text {
              font-size: 2vw;
            }
            .contact-us {
              margin: 15% auto;
              width: 90%;
            }
          }

          @media (max-width: 480px) {
            .about-header {
              font-size: 7vw;
              line-height: 12px;
            }
            .facts__img {
              height: 46vw;
            }
            .facts__info {
              width: 70vw;
            }
            .facts__title {
              font-size: 3.5vw;
            }
            .facts__text {
              font-size: 2.8vw;
              letter-spacing: 0.4px;
            }
          }
        `}
      </style>
    </Layout>
  )
}
export default About
