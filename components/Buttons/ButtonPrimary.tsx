import * as React from 'react'
import styles from './ButtonPrimary.module.css'

export default function Button({ children }) {
  return <div className={styles.button}>{children}</div>
}
