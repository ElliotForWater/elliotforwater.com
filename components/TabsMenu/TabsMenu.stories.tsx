import React, { useState } from 'react'
import TabsMenuComp from './TabsMenu'

export default { title: 'Components/TabsMenu' }

function Content({ children }) {
  return children
}

const tabMenu = [
  {
    id: 1,
    title: 'Tab 1',
    resultType: 'web',
    content: <Content>Tab1 content</Content>,
  },
  {
    id: 2,
    title: 'Tab 2',
    resultType: 'image',
    content: <Content>Tab2 content</Content>,
  },
  {
    id: 3,
    title: 'Tab 3',
    resultType: 'video',
    content: <Content>Tab3 content</Content>,
  },
  {
    id: 4,
    title: 'Tab 4',
    resultType: 'news',
    content: <Content>Tab4 content</Content>,
  },
]

export const TabsMenu = () => {
  const [activeTab, setActiveTab] = useState(tabMenu[0])

  function handleTabSwitch(nextTab) {
    return setActiveTab(tabMenu.find((tab) => nextTab.resultType === tab.resultType))
  }

  return (
    <>
      <TabsMenuComp tabItems={tabMenu} activeTabId={activeTab.id} setActiveTab={handleTabSwitch} query='pizza' />
      {activeTab.content}
    </>
  )
}
