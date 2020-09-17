import * as React from 'react'
import styles from './ButtonOutline.module.css'

export default function ButtonOutline({ children }) {
  return <div className={styles.button}>{children}</div>
}
