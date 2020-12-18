import React from 'react'
import styles from './ButtonPrimary.module.css'
import classnames from 'classnames'

interface ButtonProps {
  fluid?: boolean
  handleClick?: (event: React.MouseEvent<HTMLElement>) => void
  children: any
  linkHref?: string
  big?: boolean
  outline?: boolean
}

export default function ButtonPrimary ({ fluid, handleClick, children, linkHref, big, outline }: ButtonProps) {
  return (
    <div className={classnames(styles.button, { [styles.fluid]: fluid, [styles.big]: big, [styles.outline]: outline })} onClick={handleClick}>
      {linkHref ? <a href={linkHref}>{children}</a> : children}
    </div>
  )
}
