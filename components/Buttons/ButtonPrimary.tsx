import React from 'react'
import styles from './ButtonPrimary.module.css'
import classnames from 'classnames'

interface ButtonProps {
  fluid?: boolean
  handleClick?: (event: React.MouseEvent<HTMLElement>) => void
  children: any
  linkHref?: string
  big?: boolean
}

export default function Button ({ fluid, handleClick, children, linkHref, big }: ButtonProps) {
  return (
    <div
      className={classnames(styles.button, { [styles.fluid]: fluid, [styles.big]: big })}
      onClick={handleClick}
    >
      {linkHref ? <a href={linkHref}>{children}</a> : children}
    </div>
  )
}
