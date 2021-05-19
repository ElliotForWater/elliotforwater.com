import React, { FC, useState, useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import useTranslation from 'next-translate/useTranslation'
import Nav from '../Nav/Nav'
import Tooltip from '../Tooltip/Tooltip'
import styles from './HeaderHome.module.css'

const HeaderHome: FC = () => {
  const { t } = useTranslation()
  const [hideTooltip, setHideTooltip] = useState(true)
  const { userState } = useContext(UserContext)

  return (
    <header className={styles.header}>
      <div className={styles.headerRight}>
        <div className={styles.rightSide}>
          <div
            className={styles.dropletContainer}
            onMouseEnter={() => setHideTooltip(false)}
            onMouseLeave={() => setHideTooltip(true)}
            onClick={() => setHideTooltip((prev) => !prev)}
          >
            <img className={styles.dropletImg} src='/images/water_droplet.svg' />
            <Tooltip isHidden={hideTooltip} direction='right'>
              {t('common:header.tooltip_count')}
            </Tooltip>
            <p className={styles.dropletCount}>{userState.numOfSearches}</p>
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
