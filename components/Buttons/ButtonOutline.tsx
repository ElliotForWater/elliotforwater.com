import React from 'react'
import classnames from 'classnames'
import styles from './ButtonOutline.module.css'

interface ButtonProps {
  fluid?: boolean
  handleClick?: (event: React.MouseEvent<HTMLElement>) => void
  children: any
}

export default function ButtonOutline (Props: ButtonProps) {
  return (
    <div
      className={classnames(styles.button, { [styles.fluid]: Props.fluid })}
      onClick={Props.handleClick}
    >
      {Props.children}
    </div>
  )
}
