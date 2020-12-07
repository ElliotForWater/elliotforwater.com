import React from 'react'
import NewsViewComp from './NewsView'

export default { title: 'Components/NewsView' }
const NEWS = [
  {
    url: 'https://via.placeholder.com/200',
    title: 'Some title',
    subtitle: 'Some subtitle',
    description: 'Some subtitle',
    image: {
      url: 'https://via.placeholder.com/200',
      title: 'https://via.placeholder.com/200',
    },
  },
  {
    url: 'https://via.placeholder.com/250',
    title: 'Some title',
    subtitle: 'Some subtitle',
    description: 'Some subtitle',
    image: {
      url: 'https://via.placeholder.com/250',
      title: 'https://via.placeholder.com/250',
    },
  },
  {
    url: 'https://via.placeholder.com/300',
    title: 'Some title',
    subtitle: 'Some subtitle',
    description: 'Some subtitle',
    image: {
      url: 'https://via.placeholder.com/300',
      title: 'https://via.placeholder.com/300',
    },
  },
  {
    url: 'https://via.placeholder.com/500',
    title: 'Some title',
    subtitle: 'Some subtitle',
    description: 'Some subtitle',
    image: {
      url: 'https://via.placeholder.com/500',
      title: 'https://via.placeholder.com/500',
    },
  },
  {
    url: 'https://via.placeholder.com/600',
    title: 'Some title',
    subtitle: 'Some subtitle',
    description: 'Some subtitle',
    image: {
      url: 'https://via.placeholder.com/600',
      title: 'https://via.placeholder.com/600',
    },
  },
  {
    url: 'https://via.placeholder.com/800',
    title: 'Some title',
    subtitle: 'Some subtitle',
    description: 'Some subtitle',
    image: {
      url: 'https://via.placeholder.com/800',
      title: 'https://via.placeholder.com/800',
    },
  },
]

export const NewsView = () => <NewsViewComp news={NEWS} searchQuery='london' />
