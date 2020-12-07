import React from 'react'
import { shallow } from 'enzyme'
import ImagesView from './ImagesView'
import { render, screen } from '@testing-library/react'

const IMAGES = [
  {
    src: 'https://via.placeholder.com/200',
    link: 'http://placeholder.com',
    title: 'Some title',
  },
  {
    src: 'https://via.placeholder.com/400',
    link: 'http://placeholder.com',
    title: 'Some title 2',
  },
  {
    src: 'https://via.placeholder.com/250',
    link: 'http://placeholder.com',
    title: 'Some title 3',
  },
  {
    src: 'https://via.placeholder.com/100',
    link: 'http://placeholder.com',
    title: 'Some title 4',
  },
  {
    src: 'https://via.placeholder.com/500',
    link: 'http://placeholder.com',
    title: 'Some title 5',
  },
  {
    src: 'https://via.placeholder.com/650',
    link: 'http://placeholder.com',
    title: 'Some title 6',
  },
  {
    src: 'https://via.placeholder.com/220',
    link: 'http://placeholder.com',
    title: 'Some title 7',
  },
]

describe('ImagesView', () => {
  it('should render without throwing an error', function () {
    const wrap = shallow(<ImagesView images={IMAGES} searchQuery='placeholder' />)
    expect(wrap).toBeDefined()
  })

  it('should render without throwing an error', function () {
    render(<ImagesView images={IMAGES} searchQuery='placeholder' />)
    const img = screen.getAllByRole('link')
    expect(img.length).toBe(7)
  })
})
