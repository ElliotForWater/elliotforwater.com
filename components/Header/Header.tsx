import React, { FunctionComponent } from 'react'
import SearchBar from '../SearchBar/SearchBar'
import Nav from '../Nav/Nav'
import '../../webComponents/SearchCounter'
import styles from './Header.module.css'

type HeaderProps = {
  isMobile?: Boolean
}

export const Header: FunctionComponent<HeaderProps> = ({ isMobile }) => {
  return (
    <header className={styles.header}>
      {isMobile ? (
        <section className={styles.wrapper}>
          <div className={styles.logoRow}>
            <div className={styles.dropletContainer}>
              <img
                className={styles.dropletImg}
                src="/images/water_droplet.svg"
                alt="WaterDrop"
              />
              <span className={styles.dropletCount}>
                <search-count></search-count>
              </span>
            </div>
            <div className={styles.logo}>
              <a href="https://www.elliotforwater.com/">
                <img src="/images/small_logo.svg" alt="Elliot For Water Logo" />
              </a>
            </div>
            <Nav />
          </div>
          <div className={styles.searchWrap}>
            <SearchBar />
          </div>
        </section>
      ) : (
        <section className={styles.wrapper}>
          <div className={styles.leftSide}>
            <div className={styles.logoSmaller}>
              <a href="https://www.elliotforwater.com/">
                <img src="/images/small_logo.svg" alt="Elliot For Water Logo" />
              </a>
            </div>
            <div className={styles.searchWrap}>
              <SearchBar />
            </div>
          </div>
          <div className={styles.rightSide}>
            <div className={styles.dropletContainer}>
              <img
                className={styles.dropletImg}
                src="/images/water_droplet.svg"
                alt="WaterDrop"
              />
              <p className={styles.dropletCount}>
                <search-count></search-count>
              </p>
            </div>
            <div className={styles.menu}>
              <Nav />
            </div>
          </div>
        </section>
      )}
    </header>
  )
}

export default Header
