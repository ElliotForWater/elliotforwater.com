import React, { useState } from 'react'
import { mount } from 'enzyme'
import { render, fireEvent } from '@testing-library/react'
import TabsMenu from './TabsMenu'
import TabItem from '../TabItem/TabItem'

function Content ({ children }) {
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

export const TabsMenuWrap = () => {
  const [activeTab, setActiveTab] = useState(tabMenu[0])

  function handleTabSwitch (nextTab) {
    return setActiveTab(tabMenu.find((tab) => nextTab.resultType === tab.resultType))
  }

  return (
    <>
      <TabsMenu tabItems={tabMenu} activeTabId={activeTab.id} setActiveTab={handleTabSwitch} />
      {activeTab.content}
    </>
  )
}

describe('TabsMenu', () => {
  it('should render four tabs', function () {
    const wrap = mount(<TabsMenuWrap />)
    expect(wrap.find(TabItem)).toHaveLength(4)
  })

  it('should show active class on tab click', function () {
    const wrap = mount(<TabsMenuWrap />)
    expect(wrap.find(TabItem).first().prop('isActive')).toBe(true)

    wrap.find(TabItem).last().simulate('click')
    expect(wrap.find(TabItem).first().prop('isActive')).toBe(false)
    expect(wrap.find(TabItem).last().prop('isActive')).toBe(true)
  })

  it('should show corresponding content when tab is clicked', function () {
    const { getByText, queryByText } = render(<TabsMenuWrap />)
    expect(getByText('Tab1 content')).toBeDefined()

    const tab2 = getByText('Tab 3')
    fireEvent.click(tab2)
    expect(getByText('Tab3 content')).toBeDefined()
    expect(queryByText('Tab1 content')).toBeNull()
  })
})
