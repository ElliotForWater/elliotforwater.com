import React from 'react'
import classnames from 'classnames'
import useTranslation from 'next-translate/useTranslation'
import Trans from 'next-translate/Trans'
import Layout from '../components/Layout/Layout'
import ButtonPrimary from '../components/Buttons/ButtonPrimary'
import styles from './why-water.module.css'

// Images Paths
const bg1 = '/images/why-water-page/bg1.svg'
const wellTop = '/images/why-water-page/wellTop.svg'
const l1Bubble = '/images/why-water-page/layer1_bubble.svg'
const bg2 = '/images/why-water-page/bg2.svg'
const l2Bubble = '/images/why-water-page/layer2_bubble.svg'
const bg3 = '/images/why-water-page/bg3.svg'
const l3Bubble = '/images/why-water-page/layer3_bubble.svg'
const bg4 = '/images/why-water-page/bg4.svg'
const l4Bubble = '/images/why-water-page/layer4_bubble.svg'
const bg5 = '/images/why-water-page/bg5.svg'
const wellBottom = '/images/why-water-page/wellBottom.svg'
const l5Bubble = '/images/why-water-page/layer5_bubble.svg'
const bg6 = '/images/why-water-page/bg6.svg'

const ComponentH1 = (props) => <h1 className={styles.title} {...props} />
const ComponentDescription = (props) => <p className={styles.description} {...props} />
const ComponentSpan = (props) => <span {...props} />

function WaterPage () {
  const { t } = useTranslation()

  return (
    <Layout
      fluid
      pageTitle={t('whyWater:pageTitle')}
      pageDescription={t('whyWater:pageDescription')}
    >
      <section className={styles.layer1}>
        <div className={styles.headline}>
          <Trans
            i18nKey='whyWater:layer1.title'
            /* eslint-disable-next-line react/jsx-key */
            components={[<ComponentH1 />, <strong className={styles.highlightText} />]}
          />
          <h3 className={styles.subtitle}>{t('whyWater:layer1.subtitle')}</h3>
          <p className={styles.description}>{t('whyWater:layer1.explanation')}</p>
          <div className={styles.hideMobile}>
            <ButtonPrimary
              big
              linkHref='https://chrome.google.com/webstore/detail/elliot-for-water/ddfnnfelkcabbeebchaegpcdcmdekoim'
            >
              {t('common:addToChrome')}
            </ButtonPrimary>
          </div>
        </div>
        <img className={styles.bg1} src={bg1} />
        <img className={styles.wellTop} src={wellTop} />
        <div className={styles.bg1Hover}>
          <div className={classnames(styles.bubbleWrapper, styles.bubbleWrapper1)}>
            <p>{t('whyWater:layer1.bubble')}</p>
            <img className={classnames(styles.bubble, styles.l1Bubble)} src={l1Bubble} />
          </div>
        </div>
      </section>

      <section className={styles.layer2}>
        <div className={classnames(styles.headline, styles.headline2)}>
          <Trans
            i18nKey='whyWater:layer2.explanation'
            /* eslint-disable-next-line react/jsx-key */
            components={[<ComponentDescription />, <strong className={styles.smallTitle} />]}
          />
        </div>
        <img className={styles.bg2} src={bg2} />
        <div className={styles.wellMiddle} />
        <div className={styles.bg2Hover}>
          <div className={classnames(styles.bubbleWrapper, styles.bubbleWrapper2)}>
            <p>{t('whyWater:layer2.bubble')}</p>
            <img className={classnames(styles.bubble, styles.l2Bubble)} src={l2Bubble} />
          </div>
        </div>
      </section>

      <section className={styles.layer3}>
        <div className={classnames(styles.headline, styles.headline3)}>
          <Trans
            i18nKey='whyWater:layer3.explanation'
            /* eslint-disable-next-line react/jsx-key */
            components={[<ComponentDescription />, <strong className={styles.smallTitle} />]}
          />
        </div>
        <img className={styles.bg3} src={bg3} />
        <div className={styles.wellMiddle} />
        <div className={styles.bg3Hover}>
          <div className={classnames(styles.bubbleWrapper, styles.bubbleWrapper3)}>
            <p>{t('whyWater:layer3.bubble')}</p>
            <img className={classnames(styles.bubble, styles.l3Bubble)} src={l3Bubble} />
          </div>
        </div>
      </section>

      <section className={styles.layer4}>
        <div className={classnames(styles.headline, styles.headline4)}>
          <Trans
            i18nKey='whyWater:layer4.explanation'
            /* eslint-disable-next-line react/jsx-key */
            components={[<ComponentDescription />, <strong className={styles.smallTitle} />]}
          />
        </div>
        <img className={styles.bg4} src={bg4} />
        <div className={styles.wellMiddle} />
        <div className={styles.bg4Hover}>
          <div className={classnames(styles.bubbleWrapper, styles.bubbleWrapper4)}>
            <p>{t('whyWater:layer4.bubble')}</p>
            <img className={classnames(styles.bubble, styles.l4Bubble)} src={l4Bubble} />
          </div>
        </div>
      </section>

      <section className={styles.layer5}>
        <div className={classnames(styles.headline, styles.headline5)}>
          <Trans
            i18nKey='whyWater:layer5.explanation'
            /* eslint-disable-next-line react/jsx-key */
            components={[<ComponentDescription />, <strong className={styles.smallTitle} />]}
          />
        </div>
        <img className={styles.bg5} src={bg5} />
        <div className={classnames(styles.wellMiddle, styles.wellLastBit)} />
        <img className={styles.wellBottom} src={wellBottom} />
        <div className={styles.bg5Hover}>
          <div className={classnames(styles.bubbleWrapper, styles.bubbleWrapper5)}>
            <p>{t('whyWater:layer5.bubble')}</p>
            <img className={classnames(styles.bubble, styles.l5Bubble)} src={l5Bubble} />
          </div>
        </div>
      </section>

      <section className={styles.layer6}>
        <div className={classnames(styles.headline, styles.headline6)}>
          <div className={styles.description}>
            <h3 className={styles.subtitle}>{t('whyWater:layer6.subtitle')}</h3>
            <Trans
              i18nKey='whyWater:layer6.explanation'
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
          <div className={styles.hideMobile}>
            <ButtonPrimary
              big
              linkHref='https://chrome.google.com/webstore/detail/elliot-for-water/ddfnnfelkcabbeebchaegpcdcmdekoim'
            >
              {t('common:addToChrome')}
            </ButtonPrimary>
          </div>
        </div>
        <img className={styles.bg6} src={bg6} />
      </section>
    </Layout>
  )
}

export default WaterPage
