import React from 'react'
import { shallow } from 'enzyme'
import NewsView from './NewsView'
import { render, screen } from '@testing-library/react'

const NEWS = [
  {
    url: 'https://via.placeholder.com/200',
    title: 'Some title 1',
    subtitle: 'Some subtitle',
    description: 'Some subtitle',
    image: {
      url: 'https://via.placeholder.com/200',
      title: 'https://via.placeholder.com/200',
    },
  },
  {
    url: 'https://via.placeholder.com/250',
    title: 'Some title 2',
    subtitle: 'Some subtitle',
    description: 'Some subtitle',
    image: {
      url: 'https://via.placeholder.com/250',
      title: 'https://via.placeholder.com/250',
    },
  },
  {
    url: 'https://via.placeholder.com/300',
    title: 'Some title 3',
    subtitle: 'Some subtitle',
    description: 'Some subtitle',
    image: {
      url: 'https://via.placeholder.com/300',
      title: 'https://via.placeholder.com/300',
    },
  },
  {
    url: 'https://via.placeholder.com/500',
    title: 'Some title 4',
    subtitle: 'Some subtitle',
    description: 'Some subtitle',
    image: {
      url: 'https://via.placeholder.com/500',
      title: 'https://via.placeholder.com/500',
    },
  },
  {
    url: 'https://via.placeholder.com/600',
    title: 'Some title 5',
    subtitle: 'Some subtitle',
    description: 'Some subtitle',
    image: {
      url: 'https://via.placeholder.com/600',
      title: 'https://via.placeholder.com/600',
    },
  },
  {
    url: 'https://via.placeholder.com/800',
    title: 'Some title 6',
    subtitle: 'Some subtitle',
    description: 'Some subtitle',
    image: {
      url: 'https://via.placeholder.com/800',
      title: 'https://via.placeholder.com/800',
    },
  },
]

describe('NewsView', () => {
  it('should render without throwing an error', function () {
    const wrap = shallow(<NewsView news={NEWS} searchQuery='placeholder' />)
    expect(wrap).toBeDefined()
  })

  it('should render without throwing an error', function () {
    render(<NewsView news={NEWS} searchQuery='placeholder' />)
    const article = screen.getAllByRole('article')
    expect(article.length).toBe(6)
  })
})
