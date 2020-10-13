import React, { FC, useEffect } from 'react'
import SearchBar from '../SearchBar/SearchBar'
import Nav from '../Nav/Nav'
import styles from './Header.module.css'

type HeaderProps = {
  isMobile?: Boolean
}

const Header: FC<HeaderProps> = ({ isMobile }) => {
  useEffect(() => {
    import('../../webComponents/SearchCounter')
  }, [])

  return (
    <header className={styles.header}>
      <section className={styles.wrapperMobile}>
        <div className={styles.logoRow}>
          <div className={styles.dropletContainer}>
            <img className={styles.dropletImg} src='/images/water_droplet.svg' alt='WaterDrop' />
            <span className={styles.dropletCount}>
              <search-count />
            </span>
          </div>
          <div className={styles.logo}>
            <a href='https://www.elliotforwater.com/'>
              <img src='/images/small_logo.svg' alt='Elliot For Water Logo' />
            </a>
          </div>
          <Nav />
        </div>
        <div className={styles.searchWrap}>
          <SearchBar />
        </div>
      </section>

      <section className={styles.wrapperDesktop}>
        <div className={styles.leftSide}>
          <div className={styles.logoSmaller}>
            <a href='https://www.elliotforwater.com/'>
              <img src='/images/small_logo.svg' alt='Elliot For Water Logo' />
            </a>
          </div>
          <div className={styles.searchWrap}>
            <SearchBar />
          </div>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.dropletContainer}>
            <img className={styles.dropletImg} src='/images/water_droplet.svg' alt='WaterDrop' />
            <p className={styles.dropletCount}>
              <search-count />
            </p>
          </div>
          <div className={styles.menu}>
            <Nav />
          </div>
        </div>
      </section>
    </header>
  )
}

export default Header
