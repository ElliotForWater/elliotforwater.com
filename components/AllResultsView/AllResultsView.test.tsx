import React from 'react'
import { shallow } from 'enzyme'
import AllResultsView from './AllResultsView'
import { render, screen } from '@testing-library/react'
import ALL_RESULTS from '../../__mocks__/webApi.json'

describe('AllResultsView', () => {
  it('should render without throwing an error', function () {
    const wrap = shallow(<AllResultsView results={ALL_RESULTS} searchQuery='sugar' />)
    expect(wrap).toBeDefined()
  })

  it('should render 13 articles', function () {
    render(<AllResultsView results={ALL_RESULTS} searchQuery='sugar' />)
    const article = screen.getAllByRole('article')
    expect(article.length).toBe(14)
  })
})
