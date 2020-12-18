import React, { ReactElement } from 'react'
import TabItem from '../TabItem/TabItem'
interface tabProp {
  id: number
  resultType: string
  title: string
  content: ReactElement
}
interface Props {
  tabItems: tabProp[]
  activeTabId: number
  setActiveTab: (nextActiveTab: tabProp) => void
}

const TabsMenu = ({ tabItems, activeTabId, setActiveTab }: Props) => {
  return (
    <div className='tabs'>
      {tabItems.map((tab) => (
        <TabItem
          key={tab.title}
          title={tab.title}
          onItemClicked={() => setActiveTab(tab)}
          isActive={activeTabId === tab.id}
        />
      ))}
      <style jsx>
        {`
          .tabs {
            display: flex;
            align-items: center;
          }
        `}
      </style>
    </div>
  )
}

export default TabsMenu
