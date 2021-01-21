import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import TabItem from '../TabItem/TabItem'
interface tabProp {
  id: number
  resultType: string
  title: string
}
interface Props {
  tabItems: tabProp[]
  activeTabId: number
  setActiveTab: (nextActiveTab: tabProp) => void
}

const TabsMenu = ({ tabItems, activeTabId, setActiveTab }: Props) => {
  const { t } = useTranslation()

  return (
    <div className='tabs'>
      {tabItems.map((tab) => (
        <TabItem key={tab.title} title={t(tab.title)} onItemClicked={() => setActiveTab(tab)} isActive={activeTabId === tab.id} />
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
