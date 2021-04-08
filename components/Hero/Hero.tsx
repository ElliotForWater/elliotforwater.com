import ButtonAddToBrowser from '../Buttons/ButtonAddToBrowser'
import ButtonPrimary from '../Buttons/ButtonPrimary'
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
        {withBrowserCta ? <ButtonAddToBrowser /> : null}
        {ctaLink ? (
          <ButtonPrimary big linkHref={ctaLink}>
            {ctaLabel}
          </ButtonPrimary>
        ) : null}
      </div>
    </section>
  )
}

export default Hero
