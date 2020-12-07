import React from 'react'
import { shallow } from 'enzyme'
import AllResultsView from './AllResultsView'
import { render, screen } from '@testing-library/react'

const ITEMS = [
  {
    url: 'https://via.placeholder.com/200',
    title: 'Some title',
    subtitle: 'Some subtitle',
    description: 'Some subtitle',
    sponsor: true,
    relates: [
      {
        url: 'https://via.placeholder.com/200',
        title: 'related search 1',
      },
      {
        url: 'https://via.placeholder.com/200',
        title: 'related search 2',
      },
      {
        url: 'https://via.placeholder.com/200',
        title: 'related search 3',
      },
    ],
  },
  {
    url: 'https://via.placeholder.com/250',
    title: 'Some title',
    subtitle: 'Some subtitle',
    description: 'Some subtitle',
    sponsor: false,
    relates: [
      {
        url: 'https://via.placeholder.com/200',
        title: 'related search 1',
      },
      {
        url: 'https://via.placeholder.com/200',
        title: 'related search 2',
      },
      {
        url: 'https://via.placeholder.com/200',
        title: 'related search 3',
      },
    ],
  },
  {
    url: 'https://via.placeholder.com/300',
    title: 'Some title',
    subtitle: 'Some subtitle',
    description: 'Some subtitle',
    sponsor: false,
    relates: [
      {
        url: 'https://via.placeholder.com/200',
        title: 'related search 1',
      },
      {
        url: 'https://via.placeholder.com/200',
        title: 'related search 2',
      },
      {
        url: 'https://via.placeholder.com/200',
        title: 'related search 3',
      },
    ],
  },
  {
    url: 'https://via.placeholder.com/500',
    title: 'Some title',
    subtitle: 'Some subtitle',
    description: 'Some subtitle',
    sponsor: true,
    relates: [
      {
        url: 'https://via.placeholder.com/200',
        title: 'related search 1',
      },
      {
        url: 'https://via.placeholder.com/200',
        title: 'related search 2',
      },
      {
        url: 'https://via.placeholder.com/200',
        title: 'related search 3',
      },
    ],
  },
  {
    url: 'https://via.placeholder.com/600',
    title: 'Some title',
    subtitle: 'Some subtitle',
    description: 'Some subtitle',
    sponsor: true,
    relates: [
      {
        url: 'https://via.placeholder.com/200',
        title: 'related search 1',
      },
      {
        url: 'https://via.placeholder.com/200',
        title: 'related search 2',
      },
      {
        url: 'https://via.placeholder.com/200',
        title: 'related search 3',
      },
    ],
  },
  {
    url: 'https://via.placeholder.com/800',
    title: 'Some title',
    subtitle: 'Some subtitle',
    description: 'Some subtitle',
    sponsor: false,
    relates: [
      {
        url: 'https://via.placeholder.com/200',
        title: 'related search 1',
      },
      {
        url: 'https://via.placeholder.com/200',
        title: 'related search 2',
      },
      {
        url: 'https://via.placeholder.com/200',
        title: 'related search 3',
      },
    ],
  },
]

describe('AllResultsView', () => {
  it('should render without throwing an error', function () {
    const wrap = shallow(<AllResultsView items={ITEMS} searchQuery='placeholder' />)
    expect(wrap).toBeDefined()
  })

  it('should render without throwing an error', function () {
    render(<AllResultsView items={ITEMS} searchQuery='placeholder' />)
    const article = screen.getAllByRole('article')
    expect(article.length).toBe(6)
  })
})
