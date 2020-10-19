import React from 'react'
import styles from './ButtonPrimary.module.css'
import classnames from 'classnames'

interface ButtonProps {
  fluid?: boolean
  handleClick?: (event: React.MouseEvent<HTMLElement>) => void
  children: any
}

export default function Button (Props: ButtonProps) {
  return (
    <div
      className={classnames(styles.button, { [styles.fluid]: Props.fluid })}
      onClick={Props.handleClick}
    >
      {Props.children}
    </div>
  )
}
