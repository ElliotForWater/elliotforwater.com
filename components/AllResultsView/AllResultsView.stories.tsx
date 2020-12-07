import React from 'react'
import AllResultsViewComp from './AllResultsView'

export default { title: 'Components/AllResultsView' }
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

export const AllResultsView = () => <AllResultsViewComp items={ITEMS} searchQuery='london' />
