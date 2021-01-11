import SubscribeForm from '../Forms/Subscribe/SubscribeForm'
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'
import styles from './Footer.module.css'

const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer className={styles.footer}>
      <div className={styles.social}>
        <h4 className={styles.title}>{t('common:footer.social_with_us')}</h4>
        <div className={styles.icons}>
          <a target='_blank' href='https://www.facebook.com/elliotforwater/' rel='noopener'>
            <img className={styles.icon} src='/images/social-icons/fb_icon.svg' alt='facebook elliot for water' />
          </a>
          <a target='_blank' href='https://www.instagram.com/elliotforwater/' rel='noopener'>
            <img className={styles.icon} src='/images/social-icons/instagram_icon.svg' alt='instagram elliot for water' />
          </a>
          <a target='_blank' href='https://vm.tiktok.com/Kk2AL5/' rel='noopener'>
            <img className={styles.icon} src='/images/social-icons/tiktok_icon.svg' alt='tiktok elliot for water' />
          </a>
          <a target='_blank' href='https://twitter.com/Elliotforwater' rel='noopener'>
            <img className={styles.icon} src='/images/social-icons/twitter_icon.svg' alt='twitter elliot for water' />
          </a>
          <a target='_blank' href='https://www.youtube.com/channel/UCPxhu7Umb7kBzGVA0DB7uew?view_as=subscriber' rel='noopener'>
            <img className={styles.icon} src='/images/social-icons/youtube_icon.svg' alt='youtube elliot for water' />
          </a>
        </div>
      </div>
      <div className={styles.newsletter}>
        <h4 className={styles.title}>{t('common:footer.follow_our_journey')}</h4>
        <SubscribeForm />
      </div>

      <div className={styles.separationLine} />
      <ul className={styles.links}>
        <li className={styles.link}>
          <Link href='/about'>
            <a>{t('common:footer.contact')}</a>
          </Link>
        </li>
        <li className={styles.link}>
          <Link href='/about'>
            <a>{t('common:footer.about_us')}</a>
          </Link>
        </li>
        {/* <li>
            FAQ
        </li> */}
        <li className={styles.link}>
          <Link href='/privacy'>
            <a>{t('common:footer.privacy')}</a>
          </Link>
        </li>
        <li className={styles.link}>
          <Link href='/terms'>
            <a>{t('common:footer.terms')}</a>
          </Link>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
