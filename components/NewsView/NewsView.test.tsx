import React from 'react'
import NewsView from './NewsView'
import { render, screen } from '@testing-library/react'
import NEWS from '../../__mocks__/newsApi.json'

describe('NewsView', () => {
  it('should render without throwing an error', function () {
    const { container } = render(<NewsView news={NEWS.value} query='goat' />)
    expect(container).toBeDefined()
  })

  it('should render all the elements in the NEWS array', function () {
    render(<NewsView news={NEWS.value} query='goat' />)
    const article = screen.getAllByRole('article')
    expect(article.length).toBe(18)
  })

  it('should render no result title', function () {
    const noResQuery = 'hfkajdhfkahdfj'
    render(<NewsView news={[]} query={`${noResQuery}`} />)
    const title = screen.getByText(/no_result_found/i)
    expect(title).toBeDefined()
  })

  it('should be empty', function () {
    const { container } = render(<NewsView news={undefined} query='goat' />)
    expect(container.firstChild).toBeNull()
  })
})
