import React, { FC, useState, useContext } from 'react'
import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'
import SearchBar from '../SearchBar/SearchBar'
import Nav from '../Nav/Nav'
import { UserContext } from '../../context/UserContext'
import Tooltip from '../Tooltip/Tooltip'
import styles from './Header.module.css'
import { useMediaQuery } from '../../hooks/useMediaQuery'

function Droplet() {
  const [hideTooltip, setHideTooltip] = useState(true)
  const { userState } = useContext(UserContext)
  const { t } = useTranslation()
  const isBreakpoint = useMediaQuery(768)

  return (
    <div
      className={styles.dropletContainer}
      onMouseEnter={() => setHideTooltip(false)}
      onMouseLeave={() => setHideTooltip(true)}
      onClick={() => setHideTooltip((prev) => !prev)}
    >
      <img className={styles.dropletImg} src='/images/water_droplet.svg' />
      <Tooltip isHidden={hideTooltip} direction={isBreakpoint ? 'left' : 'right'}>
        {t('common:header.tooltip_count')}
      </Tooltip>
      <span className={styles.dropletCount}>{userState.numOfSearches}</span>
    </div>
  )
}

function Logo() {
  const isBreakpoint = useMediaQuery(768)

  return (
    <div className={isBreakpoint ? styles.logo : styles.logoSmaller}>
      <Link href='/'>
        <a>
          <img src='/images/small_logo.svg' alt='Elliot For Water Logo' />
        </a>
      </Link>
    </div>
  )
}

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <section className={styles.wrapper}>
        <div className={styles.dropletWrap}>
          <Droplet />
        </div>
        <div className={styles.logoWrap}>
          <Logo />
        </div>
        <div className={styles.navWrap}>
          <Nav />
        </div>
        <div className={styles.searchBarWrap}>
          <SearchBar />
        </div>
      </section>
    </header>
  )
}

export default Header
