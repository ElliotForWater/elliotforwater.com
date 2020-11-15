import React, { FC, useEffect, useState } from 'react'
import SearchBar from '../SearchBar/SearchBar'
import Nav from '../Nav/Nav'
import Tooltip from '../Tooltip/Tooltip'
import styles from './Header.module.css'

const Header: FC = () => {
  const [hideTooltip, setHideTooltip] = useState(true)
  useEffect(() => {
    import('../../webComponents/SearchCounter')
  }, [])

  return (
    <header className={styles.header}>
      <section className={styles.wrapperMobile}>
        <div className={styles.logoRow}>
          <div
            className={styles.dropletContainer}
            onMouseEnter={() => setHideTooltip(false)}
            onMouseLeave={() => setHideTooltip(true)}
          >
            <img className={styles.dropletImg} src='/images/water_droplet.svg' alt='Water Drop' />
            <Tooltip isHidden={hideTooltip} direction='left'>
              This is the number of searches you have done with Elliot for Water. Approximately,
              every search donates 14 liters of pure drinking water.
            </Tooltip>
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
          <div
            className={styles.dropletContainer}
            onMouseEnter={() => setHideTooltip(false)}
            onMouseLeave={() => setHideTooltip(true)}
          >
            <img className={styles.dropletImg} src='/images/water_droplet.svg' alt='WaterDrop' />
            <Tooltip isHidden={hideTooltip} direction='right'>
              This is the number of searches you have done with Elliot for Water. Approximately,
              every search donates 14 liters of pure drinking water.
            </Tooltip>
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
