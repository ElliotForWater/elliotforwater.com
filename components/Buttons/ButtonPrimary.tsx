import React, { FC } from 'react'
import styles from './ButtonPrimary.module.css'
import classnames from 'classnames'

type Props = {
  fluid?: boolean
}

const Button: FC<Props> = ({ children, fluid }) => {
  return <div className={classnames(styles.button, { [styles.fluid]: fluid })}>{children}</div>
}

export default Button
