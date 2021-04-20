import React from 'react'
import Button from '../Button'
import styles from './ButtonSubscribe.module.css'

export default function ButtonSubscribe(props) {
  return (
    <span className={styles.subscribe}>
      <Button type='subscribe' {...props} size='small' />
    </span>
  )
}
