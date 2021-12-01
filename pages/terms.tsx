import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import Layout from '../components/Layout/Layout'

function Terms() {
  const { t } = useTranslation()

  return (
    <Layout fluid pageTitle={t('terms:pageTitle')} pageDescription={t('terms:pageDescription')}>
      <div className='internal-page-container'>
        <h2>{t('terms:title')}</h2>
        <div>{t('terms:date')}</div>
        <div className='internal-page-divider' />

        <div className='internal-page-text'>
          <p>{t('terms:p1')}</p>
          <p>{t('terms:p2')}</p>
          <p>{t('terms:p3')}</p>
          <h4>{t('terms:subtitle1')}</h4>
          <p>{t('terms:p4')}</p>
          <h4>{t('terms:subtitle2')}</h4>
          <p>{t('terms:p5')}</p>
          <p>{t('terms:p6')}</p>
          <p>{t('terms:p7')}</p>
          <h4>{t('terms:subtitle3')}</h4>
          <p>{t('terms:p8')}</p>
          <p>{t('terms:p9')}</p>
          <p>{t('terms:p10')}</p>
          <h4>{t('terms:subtitle4')}</h4>
          <p>{t('terms:p11')}</p>
          <h4>{t('terms:subtitle5')}</h4>
          <p>{t('terms:p12')}</p>
          <h4>{t('terms:subtitle6')}</h4>
          <p>{t('terms:p13')}</p>
          <p>{t('terms:p14')}</p>
          <h4>{t('terms:subtitle7')}</h4>
          <p>{t('terms:p15')}</p>
          <h4>{t('terms:subtitle8')}</h4>
          <p>{t('terms:p16')}</p>
          <p>{t('terms:p17')}</p>
          <h4>{t('terms:subtitle9')}</h4>
          <p>{t('terms:p18')}</p>
          <p>{t('terms:p19')}</p>
          <h4>{t('terms:subtitle10')}</h4>
          <p>{t('terms:p20')}</p>
          <p>
            {t('terms:p21')} <a href='mailto:info@elliotforwater.com'>info@elliotforwater.com</a>
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default Terms
