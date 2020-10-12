import React, { FC } from 'react'
import styles from './ButtonOutline.module.css'

const ButtonOutline: FC = ({ children }) => {
  return <div className={styles.button}>{children}</div>
}

export default ButtonOutline
