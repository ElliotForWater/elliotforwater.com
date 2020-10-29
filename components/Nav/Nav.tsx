import React, { useState } from 'react'
import classnames from 'classnames'
import styles from './Nav.module.css'

const Nav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

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
          <a href='https://www.elliotforwater.com/why-water.html'>Why Water</a>
        </li>
        <li className={styles.menuItem}>
          <a href='https://www.elliotforwater.com/about'>About us</a>
        </li>
        <li className={styles.divider} />
        <li className={styles.menuItem}>
          <a href='https://www.facebook.com/elliotforwater/?fref=ts'>Share us on Facebook</a>
        </li>
        <li className={styles.menuItem}>
          <a href='https://elliotforwater.wordpress.com/'>Blog</a>
        </li>
        <li className={styles.divider} />
        <li className={styles.menuItem}>
          <a href='#' data-toggle='modal' data-target='#settings-modal'>
            Settings
          </a>
        </li>
        <li className={styles.menuItem}>
          <a href='https://www.elliotforwater.com/Terms'>Terms</a>
        </li>
        <li className={styles.menuItem}>
          <a href='https://www.elliotforwater.com/Privacy'>Privacy</a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
