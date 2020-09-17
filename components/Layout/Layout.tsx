import React, { FunctionComponent } from 'react'
import styles from './Layout.module.css'

type LayoutProps = {
  fluid?: Boolean
}

export const Layout: FunctionComponent<LayoutProps> = ({ children, fluid }) => {
  return (
    <div className={fluid ? styles.fluid : styles.container}>{children}</div>
  )
}

export default Layout
