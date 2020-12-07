import React from 'react'
import ImagesViewComp from './ImagesView'

export default { title: 'Components/ImagesView' }
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

export const ImagesView = () => <ImagesViewComp images={IMAGES} searchQuery='placeholder' />
