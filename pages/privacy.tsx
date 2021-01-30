import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import Layout from '../components/Layout/Layout'
import Trans from 'next-translate/Trans'

const ComponentDescription = (props) => <p {...props} />

function Privacy() {
  const { t } = useTranslation()

  return (
    <Layout fluid pageTitle={t('privacy:pageTitle')} pageDescription={t('privacy:pageDescription')}>
      <div className='old_container'>
        <h2 className='title'>{t('privacy:title')}</h2>
        <p>{t('privacy:description')}</p>
      </div>
      <div className='content full' id='content'>
        <div className='old_container'>
          <h3>{t('privacy:subtitle1')}</h3>
          <Trans
            i18nKey='privacy:p1'
            /* eslint-disable-next-line react/jsx-key */
            components={[<ComponentDescription />, <br />]}
          />
          <h3>{t('privacy:subtitle2')}</h3>
          <Trans
            i18nKey='privacy:p2'
            /* eslint-disable-next-line react/jsx-key */
            components={[<ComponentDescription />, <br />]}
          />
          <h3>{t('privacy:subtitle3')}</h3>
          <Trans
            i18nKey='privacy:p3'
            /* eslint-disable-next-line react/jsx-key */
            components={[<ComponentDescription />, <br />]}
          />
          <h3>{t('privacy:subtitle4')}</h3>
          <Trans
            i18nKey='privacy:p4_a'
            /* eslint-disable react/jsx-key */
            components={[
              <ComponentDescription />,
              <a href='http://www.codefuel.com/legal/end_user_privacy_policy' target='_blank' />,
              <a href='http://go.microsoft.com/fwlink/?LinkId=521839' target='_blank' />,
            ]}
            /* eslint-enable react/jsx-key */
          />
          <p>{t('privacy:p4_b')}</p>
          <p>{t('privacy:p4_c')}</p>
          <p>{t('privacy:p4_d')} </p>

          <h3>{t('privacy:subtitle5')}</h3>
          <p>{t('privacy:p5')}</p>

          <h3>{t('privacy:subtitle6')}</h3>
          <p>{t('privacy:p6')}</p>

          <h3>{t('privacy:subtitle7')}</h3>
          <Trans
            i18nKey='privacy:p7'
            /* eslint-disable-next-line react/jsx-key */
            components={[<ComponentDescription />, <br />]}
          />

          <h3>Y{t('privacy:subtitle8')}</h3>
          <p>{t('privacy:p8')}</p>

          <p>Email: info@elliotforwater.com</p>
          <br />
        </div>{' '}
        {/* <!-- end container --> */}
      </div>
    </Layout>
  )
}

export default Privacy
