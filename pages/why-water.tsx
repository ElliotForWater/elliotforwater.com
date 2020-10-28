import React from 'react'
import classnames from 'classnames'
import Layout from '../components/Layout/Layout'
import ButtonPrimary from '../components/Buttons/ButtonPrimary'
import styles from './whywater.module.css'

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

function WaterPage () {
  return (
    <Layout fluid pageTitle='Why Water' pageDescription='Why we choose water?'>
      <section className={styles.layer1}>
        <div className={styles.headline}>
          <h1 className={styles.title}>
            why <span className={styles.highlightText}>water?</span>
          </h1>
          <h3 className={styles.subtitle}>1 in 10 people lack access to safe drinking water</h3>
          <p className={styles.description}>
            Marking Elliot for Water your default search engine means you will be directly saving
            millions of people every day by simply searching the web.
          </p>
          <div className={styles.hideMobile}>
            <ButtonPrimary linkHref='https://chrome.google.com/webstore/detail/elliot-for-water/ddfnnfelkcabbeebchaegpcdcmdekoim'>
              Add Elliot for Water to Chrome
            </ButtonPrimary>
          </div>
        </div>
        <img className={styles.bg1} src={bg1} />
        <img className={styles.wellTop} src={wellTop} />
        <div className={styles.bg1Hover}>
          <div className={classnames(styles.bubbleWrapper, styles.bubbleWrapper1)}>
            <p>
              Wells allow people with no acess to fresh water to have a direct and sustainable water
              source directly at their fingertips.
            </p>
            <img className={classnames(styles.bubble, styles.l1Bubble)} src={l1Bubble} />
          </div>
        </div>
      </section>

      <section className={styles.layer2}>
        <div className={classnames(styles.headline, styles.headline2)}>
          <p className={styles.description}>
            <strong className={styles.smallTitle}>785 million people</strong>
            around the world lack access to safe drinking water leading to many health diseases.
            Clean water can save the lives of more than 760,000 people every year.
          </p>
        </div>
        <img className={styles.bg2} src={bg2} />
        <div className={styles.wellMiddle} />
        <div className={styles.bg2Hover}>
          <div className={classnames(styles.bubbleWrapper, styles.bubbleWrapper2)}>
            <p>
              Dirty water sourced from shallow hand-dug wells can contain many harmful bacteria,
              parasites, and even toxic chemicals
            </p>
            <img className={classnames(styles.bubble, styles.l2Bubble)} src={l2Bubble} />
          </div>
        </div>
      </section>

      <section className={styles.layer3}>
        <div className={classnames(styles.headline, styles.headline3)}>
          <p className={styles.description}>
            <strong className={styles.smallTitle}>6 hours every day</strong>
            is how long women spend collecting water. When we give villages clean water, women get
            back the time and the opportunity to work and take care of their families.
          </p>
        </div>
        <img className={styles.bg3} src={bg3} />
        <div className={styles.wellMiddle} />
        <div className={styles.bg3Hover}>
          <div className={classnames(styles.bubbleWrapper, styles.bubbleWrapper3)}>
            <p>One of these jars the women carry on their heads can weigh up to 44 pounds!</p>
            <img className={classnames(styles.bubble, styles.l3Bubble)} src={l3Bubble} />
          </div>
        </div>
      </section>

      <section className={styles.layer4}>
        <div className={classnames(styles.headline, styles.headline4)}>
          <p className={styles.description}>
            <strong className={styles.smallTitle}>Children walk up to 4 miles</strong>
            per day to find muddy drinking water. Your searches give them not only fresh and healthy
            drinking water, but also the time to attend school, get an education, and enjoy their
            childhood.
          </p>
        </div>
        <img className={styles.bg4} src={bg4} />
        <div className={styles.wellMiddle} />
        <div className={styles.bg4Hover}>
          <div className={classnames(styles.bubbleWrapper, styles.bubbleWrapper4)}>
            <p>
              Wells are usually dug around 50-75 feet to reach the water found deep within the
              earth.
            </p>
            <img className={classnames(styles.bubble, styles.l4Bubble)} src={l4Bubble} />
          </div>
        </div>
      </section>

      <section className={styles.layer5}>
        <div className={classnames(styles.headline, styles.headline5)}>
          <p className={styles.description}>
            <strong className={styles.smallTitle}>Carbon offset.</strong>
            Access to clean drinking water prevents people from creating CO2 emissions, as villagers
            do not need anymore to burn wood to boil and purify their water.
          </p>
        </div>
        <img className={styles.bg5} src={bg5} />
        <div className={classnames(styles.wellMiddle, styles.wellLastBit)} />
        <img className={styles.wellBottom} src={wellBottom} />
        <div className={styles.bg5Hover}>
          <div className={classnames(styles.bubbleWrapper, styles.bubbleWrapper5)}>
            <p>
              A pump cylinder pulls the water up through the main pipes and delivers the fresh
              water.
            </p>
            <img className={classnames(styles.bubble, styles.l5Bubble)} src={l5Bubble} />
          </div>
        </div>
      </section>

      <section className={styles.layer6}>
        <div className={classnames(styles.headline, styles.headline6)}>
          <div className={styles.description}>
            <h3 className={styles.subtitle}>How do we work?</h3>
            We work with local and trusted organizations to implement the best and most sustainable
            solution in each village. In fact, not every location has the same needs: some villages
            may require wells while other sand filters or pipelines, for example. The most important
            thing is that all people get access to fresh drinking water.
          </div>
          <div className={styles.hideMobile}>
            <ButtonPrimary linkHref='https://chrome.google.com/webstore/detail/elliot-for-water/ddfnnfelkcabbeebchaegpcdcmdekoim'>
              Add Elliot for Water to Chrome
            </ButtonPrimary>
          </div>
        </div>
        <img className={styles.bg6} src={bg6} />
      </section>
    </Layout>
  )
}

export default WaterPage
