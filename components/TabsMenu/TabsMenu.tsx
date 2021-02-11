import React, { ReactElement } from 'react'
import useTranslation from 'next-translate/useTranslation'
import TabItem from '../TabItem/TabItem'

interface tabObjectProp {
  id: string
  label: string
  link: string
  icon: ReactElement
}
interface tabProp {
  id: number
  resultType: string
  title: string
  icon?: ReactElement | undefined
  links?: tabObjectProp[]
  externalLink?: string | undefined
}

interface Props {
  tabItems: tabProp[]
  activeTabId: number
  setActiveTab: (nextActiveTab: tabProp) => void
  query: string
}

const TabsMenu = ({ tabItems, activeTabId, setActiveTab, query }: Props) => {
  const { t } = useTranslation()

  return (
    <div className='tabs'>
      {tabItems.map((tab) => (
        <TabItem
          key={tab.title}
          title={t(tab.title)}
          onItemClicked={() => setActiveTab(tab)}
          icon={tab.icon !== null && tab.icon}
          isActive={activeTabId === tab.id}
          links={tab.links}
          query={query}
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
