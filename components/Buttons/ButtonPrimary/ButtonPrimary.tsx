import React from 'react'
import Button from '../Button'
import styles from './ButtonPrimary.module.css'
import classnames from 'classnames'

export default function ButtonPrimary(props) {
  return (
    <span className={classnames(styles.primary, { [styles.size]: props.size })}>
      <Button {...props} />
    </span>
  )
}
