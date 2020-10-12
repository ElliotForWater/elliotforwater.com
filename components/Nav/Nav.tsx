import React, { useState } from 'react'
import classnames from 'classnames'
import styles from './Nav.module.css'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className={styles.nav}>
      <div className={styles.hamburgerMenu} onClick={() => setIsOpen((wasOpen) => !wasOpen)}>
        <span />
        <span />
        <span />
      </div>
      <ul
        className={classnames(styles.menuContainer, {
          [styles.menuOpen]: isOpen
        })}
      >
        <li className={styles.menuItem}>
          <a href='/about'>Contact</a>
        </li>
        <li className={styles.menuItem}>
          <a href='/about'>About us</a>
        </li>
        <li className={styles.divider} />
        <li className={styles.menuItem}>
          <a href='https://www.facebook.com/elliotforwater/?fref=ts'>Share</a>
        </li>
        <li className={styles.menuItem}>
          <a href='http://blog.elliotforwater.com/'>Blog</a>
        </li>
        <li className={styles.divider} />
        <li className={styles.menuItem}>
          <a href='#' data-toggle='modal' data-target='#settings-modal'>
            Settings
          </a>
        </li>
        <li className={styles.menuItem}>
          <a href='/Terms'>Terms</a>
        </li>
        <li className={styles.menuItem}>
          <a href='/Privacy'>Privacy</a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
