import React from 'react'
import classnames from 'classnames'
import styles from './ButtonOutline.module.css'

interface ButtonProps {
  fluid?: boolean
  handleClick?: (event: React.MouseEvent<HTMLElement>) => void
  children: any
  linkHref?: string
}

export default function ButtonOutline ({ fluid, handleClick, linkHref, children }: ButtonProps) {
  return (
    <div className={classnames(styles.button, { [styles.fluid]: fluid })} onClick={handleClick}>
      {linkHref ? <a href={linkHref}>{children}</a> : children}
    </div>
  )
}
