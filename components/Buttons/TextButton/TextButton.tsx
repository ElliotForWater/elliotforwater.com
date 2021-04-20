import React from 'react'
import Button from '../Button'
import styles from './TextButton.module.css'

export default function TextButton(props) {
  return (
    <span className={styles.text}>
      <Button {...props} />
    </span>
  )
}
