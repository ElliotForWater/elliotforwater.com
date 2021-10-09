import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import Layout from '../components/Layout/Layout'

function Terms() {
  const { t } = useTranslation()

  return (
    <Layout fluid pageTitle={t('terms:pageTitle')} pageDescription={t('terms:pageDescription')}>
      <div className='container'>
        <h2>{t('terms:title')}</h2>
        <div className='divider'> </div>
        <label>{t('terms:date')}</label>
        <div className='termsWrap'>
          <br />
          <br />
          {t('terms:p1')}
          <br />
          <br />
          {t('terms:p2')}
          <br />
          <br />
          {t('terms:p3')}
          <br />
          <br />
          <strong>In this Article </strong>
          <ul>
            <li>
              <a href='#sub1'>{t('terms:subtitle1')}</a>
            </li>
            <li>
              {' '}
              <a href='#sub2'>{t('terms:subtitle2')}</a>
            </li>
            <li>
              <a href='#sub3'>{t('terms:subtitle3')}</a>
            </li>
            <li>
              <a href='#sub4'>{t('terms:subtitle4')}</a>
            </li>
            <li>
              <a href='#sub5'>{t('terms:subtitle5')}</a>
            </li>
            <li>
              <a href='#sub6'>{t('terms:subtitle6')}</a>
            </li>
            <li>
              <a href='#sub7'>{t('terms:subtitle7')}</a>
            </li>
            <li>
              <a href='#sub8'>{t('terms:subtitle8')}</a>
            </li>
            <li>
              <a href='#sub9'>{t('terms:subtitle9')}</a>
            </li>
            <li>
              <a href='#sub10'>{t('terms:subtitle10')}</a>
            </li>
          </ul>
          <h4 id='sub1'>{t('terms:subtitle1')}</h4>
          <hr></hr>
          <br />
          {t('terms:p4')}
          <br />
          <br />
          <h4 id='sub2'>{t('terms:subtitle2')}</h4>
          <hr></hr>
          <br />
          {t('terms:p5')}
          <br />
          <br />
          {t('terms:p6')}
          <br />
          <br />
          {t('terms:p7')}
          <br />
          <br />
          <h4 id='sub3'>{t('terms:subtitle3')}</h4>
          <hr></hr>
          <br />
          {t('terms:p8')}
          <br />
          <br />
          {t('terms:p9')}
          <br />
          <br />
          {t('terms:p10')}
          <br />
          <br />
          <h4 id='sub4'>{t('terms:subtitle4')}</h4>
          <hr></hr>
          <br />
          {t('terms:p11')}
          <br />
          <br />
          <h4 id='sub5'>{t('terms:subtitle5')}</h4>
          <hr></hr>
          <br />
          {t('terms:p12')}
          <br />
          <br />
          <h4 id='sub6'>{t('terms:subtitle6')}</h4>
          <hr></hr>
          <br />
          {t('terms:p13')}
          <br />
          <br />
          {t('terms:p14')}
          <br />
          <br />
          <h4 id='sub7'>{t('terms:subtitle7')}</h4>
          <hr></hr>
          <br />
          {t('terms:p15')}
          <br />
          <br />
          <h4 id='sub8'>{t('terms:subtitle8')}</h4>
          <hr></hr>
          <br />
          {t('terms:p16')}
          <br />
          <br />
          {t('terms:p17')}
          <br />
          <br />
          <h4 id='sub9'>{t('terms:subtitle9')}</h4>
          <hr></hr>
          <br />
          {t('terms:p18')}
          <br />
          <br />
          {t('terms:p19')}
          <br />
          <br />
          <h4 id='sub10'>{t('terms:subtitle10')}</h4>
          <hr></hr>
          <br />
          {t('terms:p20')}
          <br />
          <br />
          {t('terms:p21')} <a href='mailto:info@elliotforwater.com'> info@elliotforwater.com</a>
          <br />
          <br />
          {t('terms:p22')}
          <br />
          <br />
        </div>
      </div>{' '}
      {/* <!-- end old_container --> */}
      <style jsx>
        {`
          .termsWrap {
            max-width: 700px;
          }
        `}
      </style>
    </Layout>
  )
}

export default Terms
