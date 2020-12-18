import React from 'react'
import NewsViewComp from './NewsView'
import NEWS from '../../__mocks__/newsApi.json'

export default { title: 'Components/NewsView' }

export const NewsView = () => <NewsViewComp news={NEWS.newsResults.items} query='london' />
