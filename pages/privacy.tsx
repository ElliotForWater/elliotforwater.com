import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import Layout from '../components/Layout/Layout'
import Trans from 'next-translate/Trans'

const ComponentDescription = (props) => <p {...props} />

function Privacy() {
  const { t } = useTranslation()

  return (
    <Layout fluid pageTitle={t('privacy:pageTitle')} pageDescription={t('privacy:pageDescription')}>
      <div className='internal-page-container'>
        <h2>{t('privacy:title')}</h2>
        <p>{t('privacy:description')}</p>
        <div className='internal-page-divider' />

        <h4>{t('privacy:subtitle1')}</h4>
        <Trans
          i18nKey='privacy:p1'
          /* eslint-disable-next-line react/jsx-key */
          components={[<ComponentDescription />, <br />]}
        />
        <h4>{t('privacy:subtitle2')}</h4>
        <Trans
          i18nKey='privacy:p2'
          /* eslint-disable-next-line react/jsx-key */
          components={[<ComponentDescription />, <br />]}
        />
        <h4>{t('privacy:subtitle3')}</h4>
        <Trans
          i18nKey='privacy:p3'
          /* eslint-disable-next-line react/jsx-key */
          components={[<ComponentDescription />, <br />]}
        />
        <h4>{t('privacy:subtitle4')}</h4>
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

        <h4>{t('privacy:subtitle5')}</h4>
        <p>{t('privacy:p5')}</p>

        <h4>{t('privacy:subtitle6')}</h4>
        <p>{t('privacy:p6')}</p>

        <h4>{t('privacy:subtitle7')}</h4>
        <Trans
          i18nKey='privacy:p7'
          /* eslint-disable-next-line react/jsx-key */
          components={[<ComponentDescription />, <br />]}
        />

        <h4>{t('privacy:subtitle8')}</h4>
        <p>{t('privacy:p8')}</p>

        <p>
          Email: <a href='mailto:info@elliotforwater.com'>info@elliotforwater.com</a>
        </p>
        <br />
      </div>
    </Layout>
  )
}

export default Privacy
