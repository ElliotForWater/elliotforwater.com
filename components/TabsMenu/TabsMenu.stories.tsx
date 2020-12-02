import React from 'react'
import TabsMenuComp from './TabsMenu'

export default { title: 'Components/TabsMenu' }

const TestComp = () => <h1>Im a component!</h1>
const tabItems = [
  {
    id: 1,
    title: 'Tab 1',
    content: 'Tab 1 content',
  },
  {
    id: 2,
    title: 'Tab 2',
    content: <TestComp />,
  },
  {
    id: 3,
    title: 'Tab 3',
    content: 'Tab 3 content',
  },
  {
    id: 4,
    title: 'Tab 4',
    content: 'Tab 4 content',
  },
]

export const TabsMenu = () => <TabsMenuComp tabItems={tabItems} />
