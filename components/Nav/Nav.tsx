import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'
import classnames from 'classnames'
import styles from './Nav.module.css'
import Modal from '../Modal/Modal'
import Settings from '../Forms/Settings/SettingsForm'
import Button from '../Buttons/Button'

const Nav = () => {
  const { t } = useTranslation()
  const iconMenuEl = useRef(null)
  const menuEl = useRef(null)
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false)
  const [showSettings, setShowSettings] = useState<boolean>(false)

  useEffect(() => {
    function handleClickOutside(event) {
      const isOutsideMenuEl = menuEl.current && !menuEl.current.contains(event.target)
      const isOutsideMenuIcon = iconMenuEl.current && !iconMenuEl.current.contains(event.target)

      if (isOutsideMenuIcon && isOutsideMenuEl) {
        setIsNavOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [iconMenuEl])

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.hamburgerMenu} onClick={() => setIsNavOpen((wasOpen) => !wasOpen)} ref={iconMenuEl}>
          <span />
          <span />
          <span />
        </div>
        <ul
          className={classnames(styles.menuContainer, {
            [styles.menuOpen]: isNavOpen,
          })}
          ref={menuEl}
        >
          <li className={styles.menuItem}>
            <Link href='/why-water'>
              <a>{t('common:nav.why_water')}</a>
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link href='/about'>
              <a>{t('common:nav.about')}</a>
            </Link>
          </li>
          <li className={styles.divider} />
          <li className={styles.menuItem}>
            <a href='https://www.facebook.com/elliotforwater/?fref=ts'>{t('common:nav.share_fb')}</a>
          </li>
          <li className={styles.menuItem}>
            <a target='_blank' href='https://elliotforwater.wordpress.com/'>
              {t('common:nav.blog')}
            </a>
          </li>
          <li className={styles.divider} />
          <li className={styles.menuItem}>
            <Button
              onClick={() => {
                setShowSettings(true)
                setIsNavOpen(false)
              }}
            >
              <a>{t('common:nav.settings')}</a>
            </Button>
          </li>
          <li className={styles.menuItem}>
            <Link href='/terms'>
              <a>{t('common:nav.terms')}</a>
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link href='/privacy'>
              <a>{t('common:nav.privacy')}</a>
            </Link>
          </li>
        </ul>
      </nav>

      <Modal isOpenTrigger={showSettings} callbackCloseModal={() => setShowSettings(false)}>
        <Settings callbackCloseSettings={() => setShowSettings(false)} />
      </Modal>
    </>
  )
}

export default Nav
