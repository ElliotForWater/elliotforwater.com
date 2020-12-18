import React from 'react'
import { shallow } from 'enzyme'
import NewsView from './NewsView'
import { render, screen } from '@testing-library/react'
import NEWS from '../../__mocks__/newsApi.json'

describe('NewsView', () => {
  it('should render without throwing an error', function () {
    const wrap = shallow(<NewsView news={NEWS.newsResults.items} />)
    expect(wrap).toBeDefined()
  })

  it('should render all the elements in the NEWS array', function () {
    render(<NewsView news={NEWS.newsResults.items} />)
    const article = screen.getAllByRole('article')
    expect(article.length).toBe(25)
  })
})
