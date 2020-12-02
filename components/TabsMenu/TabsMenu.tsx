import React, { useState } from 'react'
import TabItem from '../TabItem/TabItem'
import styles from './TabsMenu.module.css'

type tabItemsProp = {
  id: number
  title: string
  content: string | React.ReactNode
}

interface Props {
  tabItems: tabItemsProp[]
}

const TabsMenu = ({ tabItems }: Props) => {
  const [active, setActive] = useState(1)

  return (
    <div className={styles.wrapper}>
      <div className={styles.tabs}>
        {tabItems.map(({ id, title }) => (
          <TabItem
            key={title}
            title={title}
            onItemClicked={() => setActive(id)}
            isActive={active === id}
          />
        ))}
      </div>
      <div className={styles.content}>
        {tabItems.map(({ id, content }) => {
          return active === id ? content : ''
        })}
      </div>
    </div>
  )
}

export default TabsMenu
