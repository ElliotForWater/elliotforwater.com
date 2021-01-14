import React, { FC, useState, useContext } from 'react'
import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'
import SearchBar from '../SearchBar/SearchBar'
import Nav from '../Nav/Nav'
import { UserContext } from '../../context/UserContext'
import Tooltip from '../Tooltip/Tooltip'
import styles from './Header.module.css'

const Header: FC = () => {
  const [hideTooltip, setHideTooltip] = useState(true)
  const { userState } = useContext(UserContext)
  const { t } = useTranslation()

  return (
    <header className={styles.header}>
      <section className={styles.wrapperMobile}>
        <div className={styles.logoRow}>
          <div className={styles.dropletContainer} onMouseEnter={() => setHideTooltip(false)} onMouseLeave={() => setHideTooltip(true)} onClick={() => setHideTooltip((prev) => !prev)}>
            <img className={styles.dropletImg} src='/images/water_droplet.svg' alt='Water Drop' />
            <Tooltip isHidden={hideTooltip} direction='left'>
              {t('common:header.tooltip_count')}
            </Tooltip>
            <span className={styles.dropletCount}>{userState.numOfSearches}</span>
          </div>
          <div className={styles.logo}>
            <Link href='/'>
              <a>
                <img src='/images/small_logo.svg' alt='Elliot For Water Logo' />
              </a>
            </Link>
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
            <Link href='/'>
              <a>
                <img src='/images/small_logo.svg' alt='Elliot For Water Logo' />
              </a>
            </Link>
          </div>
          <div className={styles.searchWrap}>
            <SearchBar />
          </div>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.dropletContainer} onMouseEnter={() => setHideTooltip(false)} onMouseLeave={() => setHideTooltip(true)}>
            <img className={styles.dropletImg} src='/images/water_droplet.svg' alt='WaterDrop' />
            <Tooltip isHidden={hideTooltip} direction='right'>
              {t('common:header.tooltip_count')}
            </Tooltip>
            <p className={styles.dropletCount}>{userState.numOfSearches}</p>
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
