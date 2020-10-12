import React, { FC } from 'react'
import styles from './ButtonPrimary.module.css'

const Button: FC = ({ children }) => {
  return <div className={styles.button}>{children}</div>
}

export default Button
