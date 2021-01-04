import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'
import classnames from 'classnames'
import styles from './Nav.module.css'

const Nav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { t } = useTranslation()
  const iconMenuEl = useRef(null)
  const menuEl = useRef(null)

  useEffect(() => {
    function handleClickOutside (event) {
      const isOutsideMenuEl = menuEl.current && !menuEl.current.contains(event.target)
      const isOutsideMenuIcon = iconMenuEl.current && !iconMenuEl.current.contains(event.target)

      if (isOutsideMenuIcon && isOutsideMenuEl) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [iconMenuEl])

  return (
    <nav className={styles.nav}>
      <div className={styles.hamburgerMenu} onClick={() => setIsOpen((wasOpen) => !wasOpen)} ref={iconMenuEl}>
        <span />
        <span />
        <span />
      </div>
      <ul
        className={classnames(styles.menuContainer, {
          [styles.menuOpen]: isOpen,
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
          <a href='#' data-toggle='modal' data-target='#settings-modal'>
            {t('common:nav.settings')}
          </a>
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
  )
}

export default Nav
