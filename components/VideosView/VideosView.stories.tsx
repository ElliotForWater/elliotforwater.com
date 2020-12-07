import React from 'react'
import VideosViewComp from './VideosView'

export default { title: 'Components/VideosView' }
const VIDEOS = [
  {
    src: 'https://via.placeholder.com/200',
    link: 'http://placeholder.com',
    title: 'Some title',
    subtitle: 'Some subtitle',
  },
  {
    src: 'https://via.placeholder.com/400',
    link: 'http://placeholder.com',
    title: 'Some title 2',
    subtitle: 'Some subtitle',
  },
  {
    src: 'https://via.placeholder.com/250',
    link: 'http://placeholder.com',
    title: 'Some title 3',
    subtitle: 'Some subtitle',
  },
  {
    src: 'https://via.placeholder.com/100',
    link: 'http://placeholder.com',
    title: 'Some title 4',
    subtitle: 'Some subtitle',
  },
  {
    src: 'https://via.placeholder.com/500',
    link: 'http://placeholder.com',
    title: 'Some title 5',
    subtitle: 'Some subtitle',
  },
  {
    src: 'https://via.placeholder.com/650',
    link: 'http://placeholder.com',
    title: 'Some title 6',
    subtitle: 'Some subtitle',
  },
  {
    src: 'https://via.placeholder.com/220',
    link: 'http://placeholder.com',
    title: 'Some title 7',
    subtitle: 'Some subtitle',
  },
]

export const VideosView = () => <VideosViewComp videos={VIDEOS} searchQuery='placeholder' />
