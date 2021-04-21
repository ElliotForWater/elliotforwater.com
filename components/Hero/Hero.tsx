import ButtonAddToBrowser from '../Buttons/ButtonAddToBrowser'
import ButtonPrimary from '../Buttons/ButtonPrimary/ButtonPrimary'
import styles from './Hero.module.css'

type HeroProps = {
  imageUrl: String
  title: string
  subtitle?: string
  withBrowserCta?: boolean
  ctaLabel?: string
  ctaLink?: string
}

const Hero = ({ imageUrl, title, subtitle, withBrowserCta, ctaLabel, ctaLink }: HeroProps) => {
  return (
    <section style={{ backgroundImage: `url(${imageUrl})` }} className={styles.container}>
      <div className={styles.centeredDiv}>
        <h1>{title}</h1>
        {subtitle && <h2>{subtitle}</h2>}
        {withBrowserCta ? (
          <span className={styles.button}>
            <ButtonAddToBrowser />
          </span>
        ) : null}
        {ctaLink ? (
          <span className={styles.button}>
            <ButtonPrimary size='big' linkHref={ctaLink}>
              {ctaLabel}
            </ButtonPrimary>
          </span>
        ) : null}
      </div>
    </section>
  )
}

export default Hero
