import React from 'react'
import Button from '../Button'
import styles from './ButtonPrimary.module.css'

export default function ButtonPrimary(props) {
  return (
    <span className={styles.primary}>
      <Button {...props} />
    </span>
  )
}
