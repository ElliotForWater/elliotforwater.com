import React from 'react'
import styles from './ButtonPrimary.module.css'
import classnames from 'classnames'

interface ButtonProps {
  fluid?: boolean
  handleClick?: (event: React.MouseEvent<HTMLElement>) => void
  children: any
  linkHref?: string
}

export default function Button ({ fluid, handleClick, children, linkHref }: ButtonProps) {
  return (
    <div className={classnames(styles.button, { [styles.fluid]: fluid })} onClick={handleClick}>
      {linkHref ? <a href={linkHref}>{children}</a> : children}
    </div>
  )
}
