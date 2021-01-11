import React from 'react'
import styles from './Button.module.css'
import classnames from 'classnames'

interface ButtonProps {
  type: 'primary' | 'outline' | 'text' | 'subscribe' | 'addToBrowser'
  fluid?: boolean
  onClick?: (event: React.MouseEvent<HTMLElement>) => void
  children: any
  linkHref?: string
  big?: boolean
  outline?: boolean
}

export default function Button({ type, fluid, onClick, children, linkHref, big, outline }: ButtonProps) {
  return (
    <div className={classnames(styles.button, styles[type], { [styles.fluid]: fluid, [styles.big]: big, [styles.outline]: outline })} onClick={onClick}>
      {linkHref ? <a href={linkHref}>{children}</a> : children}
    </div>
  )
}

Button.defaultProps = {
  type: 'default',
}
