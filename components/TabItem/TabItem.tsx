import React, { FC } from 'react'
import classnames from 'classnames'
import styles from './TabItem.module.css'

interface tabItemProp {
  title: string
  isActive: boolean
  onItemClicked: () => void
}

const TabsMenu: FC<tabItemProp> = ({ title, onItemClicked, isActive }) => {
  return (
    <div className={classnames(styles.tab, { [styles.active]: isActive })} onClick={onItemClicked}>
      <p className={styles.title}>{title}</p>
    </div>
  )
}

TabsMenu.defaultProps = {
  isActive: false,
}

export default TabsMenu
