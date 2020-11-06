import React, { FC, useEffect } from 'react'
import Nav from '../Nav/Nav'
import styles from './HeaderHome.module.css'

const HeaderHome: FC = () => {
  useEffect(() => {
    import('../../webComponents/SearchCounter')
  }, [])

  return (
    <header className={styles.header}>
      <div className={styles.headerRight}>
        <a className={styles.headerRightLink} href='/why-water.html'>
          Our mission
        </a>
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
      </div>
    </header>
  )
}

export default HeaderHome
