import React, { useState } from 'react'
import LoadMore from './LoadMore'
import { render, screen, fireEvent } from '@testing-library/react'

const List = () => {
  const [pageIndex, setPageIndex] = useState(0)

  return (
    <div>
      <p>{pageIndex}</p>

      <LoadMore currIndex={pageIndex} incrementIndex={(nextIndex) => setPageIndex(nextIndex)} />
    </div>
  )
}

describe('Load More', () => {
  it('should render index === 1', function () {
    render(<List />)
    const button = screen.getByText('common:load_more')
    fireEvent.click(button)
    expect(screen.queryByText('1')).toBeDefined()
  })
})
