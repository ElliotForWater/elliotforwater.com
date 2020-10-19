import React from 'react'
import classnames from 'classnames'
import Layout from '../components/Layout/Layout'
import ButtonPrimary from '../components/Buttons/ButtonPrimary'
import styles from './whywater.module.css'

// Images Paths
const bg1 = '/images/why-water-page/bg1.svg'
const l1Bubble = '/images/why-water-page/layer1_bubble.svg'
const bg2 = '/images/why-water-page/bg2.svg'
const l2Bubble = '/images/why-water-page/layer2_bubble.svg'
const bg3 = '/images/why-water-page/bg3.svg'
const l3Bubble = '/images/why-water-page/layer3_bubble.svg'
const bg4 = '/images/why-water-page/bg4.svg'
const l4Bubble = '/images/why-water-page/layer4_bubble.svg'
const bg5 = '/images/why-water-page/bg5.svg'
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
            Marking Elliot for Water your default search engine, means you will be directly saving
            millions of people everyday by simply searching the web. Every search equals one liter
            of clean drinking water.
          </p>
          <ButtonPrimary>Add Elliot for water to Chrome</ButtonPrimary>
        </div>
        <img className={styles.bg1} src={bg1} />
        <img className={classnames(styles.bubble, styles.l1Bubble)} src={l1Bubble} />
      </section>

      <section className={styles.layer2}>
        <div className={classnames(styles.headline, styles.headline2)}>
          <p className={styles.description}>
            <strong className={styles.smallTitle}>785 million people</strong>
            world wide lack access to safe drinking water. Providing clean water we can save the
            lives of over 768,000 people every year.
          </p>
        </div>
        <img className={styles.bg2} src={bg2} />
        <div className={styles.wellMiddle} />
        <img className={classnames(styles.bubble, styles.l2Bubble)} src={l2Bubble} />
      </section>

      <section className={styles.layer3}>
        <div className={classnames(styles.headline, styles.headline3)}>
          <p className={styles.description}>
            <strong className={styles.smallTitle}>6 hours every day</strong>
            is how long women spend collecting water. When we give villages fresh water, it means
            women get the opportunity to work and time to take send with families.
          </p>
        </div>
        <img className={styles.bg3} src={bg3} />
        <div className={styles.wellMiddle} />
        <img className={classnames(styles.bubble, styles.l3Bubble)} src={l3Bubble} />
      </section>

      <section className={styles.layer4}>
        <div className={classnames(styles.headline, styles.headline4)}>
          <p className={styles.description}>
            Children walk up to
            <strong className={styles.smallTitle}> 4 miles per day</strong>
            to find muddy drinking water. Your searches give them not only fresh and healthy
            drinking water, but also the time that allows them to attend a school and get an
            education.
          </p>
        </div>
        <img className={styles.bg4} src={bg4} />
        <div className={styles.wellMiddle} />
        <img className={classnames(styles.bubble, styles.l4Bubble)} src={l4Bubble} />
      </section>

      <section className={styles.layer5}>
        <div className={classnames(styles.headline, styles.headline5)}>
          <p className={styles.description}>
            <strong className={styles.smallTitle}>Offset CO2 pollution.</strong>
            By providing villages with clean drinking water, people in developing countries do not
            have to burn wood to boil and purify water. Instead they can take that time to farm and
            practice agriculture.
          </p>
        </div>
        <img className={styles.bg5} src={bg5} />
        <div className={classnames(styles.wellMiddle, styles.wellLastBit)} />
        <img className={classnames(styles.bubble, styles.l5Bubble)} src={l5Bubble} />
      </section>

      <section className={styles.layer6}>
        <div className={classnames(styles.headline, styles.headline6)}>
          <p className={styles.description}>
            <h3 className={styles.subtitle}>How does it work?</h3>
            We work with local and trusted organizations in order to implement the best and most
            sustainable solution in each village. The methods that are used depend heavily on a
            projects geographical positioning/climate. The most important part is that all people
            get access to fresh drinking water.
          </p>
          <ButtonPrimary>Add Elliot for water to Chrome</ButtonPrimary>
        </div>
        <img className={styles.bg6} src={bg6} />
      </section>
    </Layout>
  )
}

export default WaterPage
