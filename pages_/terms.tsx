import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import Layout from '../components/Layout/Layout'

function Terms () {
  const { t } = useTranslation()

  return (
    <Layout fluid pageTitle={t('terms:pageTitle')} pageDescription={t('terms:pageDescription')}>
      <div className='old_container'>
        <h2>{t('terms:title')}</h2>
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
          <strong>{t('terms:subtitle1')}</strong>
          <br />
          <br />
          {t('terms:p4')}
          <br />
          <br />
          <strong>{t('terms:subtitle2')}</strong>
          <br />
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
          <strong>{t('terms:subtitle3')}</strong>
          <br />
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
          <strong>{t('terms:subtitle4')}</strong>
          <br />
          <br />
          {t('terms:p11')}
          You agree to defend, indemnify and hold harmless Elliot For Water LTD and its licensee and licensors, and their employees, contractors, agents, officers and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but
          not limited to attorney's fees), resulting from or arising out of a) your use and access of the Service, or b) a breach of these Terms.
          <br />
          <br />
          <strong>{t('terms:subtitle5')}</strong>
          <br />
          <br />
          {t('terms:p12')}
          <br />
          <br />
          <strong>{t('terms:subtitle6')}</strong>
          <br />
          <br />
          {t('terms:p13')}
          <br />
          <br />
          {t('terms:p14')}
          <br />
          <br />
          <strong>{t('terms:subtitle7')}</strong>
          <br />
          <br />
          {t('terms:p15')}
          <br />
          <br />
          <strong>{t('terms:subtitle8')}</strong>
          <br />
          <br />
          {t('terms:p16')}
          <br />
          <br />
          {t('terms:p17')}
          <br />
          <br />
          <strong>{t('terms:subtitle9')}</strong>
          <br />
          <br />
          {t('terms:p18')}
          <br />
          <br />
          {t('terms:p19')}
          <br />
          <br />
          <strong>{t('terms:subtitle10')}</strong>
          <br />
          <br />
          {t('terms:p20')}
          <br />
          <br />
          {t('terms:p21')} info@elliotforwater.com
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
