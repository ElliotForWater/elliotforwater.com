import React, { useState, useEffect } from 'react'
import cookies from 'js-cookie'
import ButtonOutline from '../Buttons/ButtonOutline'
import styles from './Footer.module.css'

const Footer = () => {
  const [emailValue, setEmailValue] = useState<string>('')
  const [cookieAntiforgery, setCookieAntiforgery] = useState<string>('')

  useEffect(() => {
    const wordInCookie = '.AspNetCore.Antiforgery'
    const allCookies = cookies.get()
    for (const key in allCookies) {
      if (key.startsWith(wordInCookie)) {
        setCookieAntiforgery(allCookies[key])
      }
    }
  }, [])

  function handleChange (event: React.ChangeEvent<HTMLInputElement>) {
    setEmailValue(event.target.value)
  }

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
        <form className={styles.newsletterForm} action='/Contact/Subscribe' method='post'>
          <input type='text' name='name' style={{ display: 'none' }} />
          <input
            type='email'
            name='email'
            placeholder='Email'
            value={emailValue}
            onChange={handleChange}
            className={styles.newsletterEmail}
            required
          />
          <input type='hidden' name='__RequestVerificationToken' value={cookieAntiforgery} />
          <ButtonOutline>
            <button className={styles.submitButton} type='submit'>
              Subscribe
            </button>
          </ButtonOutline>
        </form>
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
