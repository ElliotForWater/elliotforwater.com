import React from 'react'
import NewsViewComp from './NewsView'
import NEWS from '../../__mocks__/newsApi.json'

export default { title: 'Components/NewsView' }

export const NewsView = () => <NewsViewComp results={NEWS} query='london' />
