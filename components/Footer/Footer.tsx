import SubscribeForm from '../Forms/SubscribeForm'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.social}>
        <h4 className={styles.title}>Get social with us</h4>
        <div className={styles.icons}>
          <a target='_blank' href='https://www.facebook.com/elliotforwater/' rel='noopener'>
            <img
              className={styles.icon}
              src='/images/social-icons/fb_icon.svg'
              alt='facebook elliot for water'
            />
          </a>
          <a target='_blank' href='https://www.instagram.com/elliotforwater/' rel='noopener'>
            <img
              className={styles.icon}
              src='/images/social-icons/instagram_icon.svg'
              alt='instagram elliot for water'
            />
          </a>
          <a target='_blank' href='https://vm.tiktok.com/Kk2AL5/' rel='noopener'>
            <img
              className={styles.icon}
              src='/images/social-icons/tiktok_icon.svg'
              alt='tiktok elliot for water'
            />
          </a>
          <a target='_blank' href='https://twitter.com/Elliotforwater' rel='noopener'>
            <img
              className={styles.icon}
              src='/images/social-icons/twitter_icon.svg'
              alt='twitter elliot for water'
            />
          </a>
          <a
            target='_blank'
            href='https://www.youtube.com/channel/UCPxhu7Umb7kBzGVA0DB7uew?view_as=subscriber'
            rel='noopener'
          >
            <img
              className={styles.icon}
              src='/images/social-icons/youtube_icon.svg'
              alt='youtube elliot for water'
            />
          </a>
        </div>
      </div>
      <div className={styles.newsletter}>
        <h4 className={styles.title}>Follow our journey</h4>
        <SubscribeForm />
      </div>

      <div className={styles.separationLine} />
      <ul className={styles.links}>
        <li className={styles.link}>
          <a href='https://www.elliotforwater.com/About'>Contact</a>
        </li>
        <li className={styles.link}>
          <a href='https://www.elliotforwater.com/About'>About Us</a>
        </li>
        {/* <li>
            FAQ
        </li> */}
        <li className={styles.link}>
          <a href='https://www.elliotforwater.com/Privacy'>Privacy</a>
        </li>
        <li className={styles.link}>
          <a href='https://www.elliotforwater.com/Terms'>Terms</a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
