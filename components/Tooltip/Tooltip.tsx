import React, { ReactNode, Fragment } from 'react'
import classnames from 'classnames'
import styles from './Tooltip.module.css'

type Props = {
  isHidden: boolean
  direction: string
  children: ReactNode
}

const Tooltip = ({ isHidden, children, direction }: Props) => {
  return (
    <>
      <span
        className={classnames(styles.tooltip, {
          [styles.isHidden]: isHidden,
          [styles[direction]]: direction
        })}
      >
        {children}
      </span>
    </>
  )
}

export default Tooltip
