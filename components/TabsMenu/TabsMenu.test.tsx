import React from 'react'
import { mount } from 'enzyme'
import { render, fireEvent } from '@testing-library/react'
import TabsMenu from './TabsMenu'
import TabItem from '../TabItem/TabItem'

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

describe('TabsMenu', () => {
  it('should render four tabs', function () {
    const wrap = mount(<TabsMenu tabItems={tabItems} />)
    expect(wrap.find(TabItem)).toHaveLength(4)
  })

  it('should show active class on tab click', function () {
    const wrap = mount(<TabsMenu tabItems={tabItems} />)
    expect(wrap.find(TabItem).first().prop('isActive')).toBe(true)

    wrap.find(TabItem).last().simulate('click')
    expect(wrap.find(TabItem).first().prop('isActive')).toBe(false)
    expect(wrap.find(TabItem).last().prop('isActive')).toBe(true)
  })

  it('should show corresponding content when tab is clicked', function () {
    const { getByText, queryByText } = render(<TabsMenu tabItems={tabItems} />)
    expect(getByText('Tab 1 content')).toBeDefined()

    const tab2 = getByText('Tab 3')
    fireEvent.click(tab2)
    expect(getByText('Tab 3 content')).toBeDefined()
    expect(queryByText('Tab 1 content')).toBeNull()
  })
})
