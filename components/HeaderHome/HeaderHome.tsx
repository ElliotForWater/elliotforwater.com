import React, { FC, useState } from 'react'
import Nav from '../Nav/Nav'
import Tooltip from '../Tooltip/Tooltip'
import styles from './HeaderHome.module.css'

const HeaderHome: FC = () => {
  const [hideTooltip, setHideTooltip] = useState(true)

  return (
    <header className={styles.header}>
      <div className={styles.headerRight}>
        <a className={styles.headerRightLink} href='/why-water.html'>
          Our mission
        </a>
        <div className={styles.rightSide}>
          <div
            className={styles.dropletContainer}
            onMouseEnter={() => setHideTooltip(false)}
            onMouseLeave={() => setHideTooltip(true)}
            onClick={() => setHideTooltip((prev) => !prev)}
          >
            <img className={styles.dropletImg} src='/images/water_droplet.svg' alt='Water Drop' />
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
      </div>
    </header>
  )
}

export default HeaderHome
