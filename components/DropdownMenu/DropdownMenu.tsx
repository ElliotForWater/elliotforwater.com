import React, { FunctionComponent, useState } from 'react'
import styles from './DropdownMenu.module.css'

export const DropdownMenu: FunctionComponent = () => {
  return (
    <nav>
      <div className={styles.hamburgerMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={styles.menuContainer}>
        <li className={styles.menuItem}>
          <a href="/about">Contact</a>
        </li>
        <li className={styles.menuItem}>
          <a href="/about">About us</a>
        </li>
        <li className={styles.divider}></li>
        <li className={styles.menuItem}>
          <a href="https://www.facebook.com/elliotforwater/?fref=ts">Share</a>
        </li>
        <li className={styles.menuItem}>
          <a href="http://blog.elliotforwater.com/">Blog</a>
        </li>
        <li className={styles.divider}></li>
        <li className={styles.menuItem}>
          <a href="#" data-toggle="modal" data-target="#settings-modal">
            Settings
          </a>
        </li>
        <li className={styles.menuItem}>
          <a href="/Terms">Terms</a>
        </li>
        <li className={styles.menuItem}>
          <a href="/Privacy">Privacy</a>
        </li>
      </ul>
    </nav>
  )
}

export default DropdownMenu
