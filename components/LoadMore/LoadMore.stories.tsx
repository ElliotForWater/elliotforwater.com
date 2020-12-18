import React from 'react'
import LoadMoreComp from './LoadMore'

export default { title: 'Components/LoadMore' }

export const LoadMore = () => <LoadMoreComp currIndex={1} incrementIndex={(nextIndex) => console.log('nextIndex', nextIndex)} />
