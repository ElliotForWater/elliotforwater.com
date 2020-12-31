import React from 'react'
import VideosViewComp from './VideosView'
import VIDEOS from '../../__mocks__/videoApi.json'

export default { title: 'Components/VideosView' }

export const VideosView = () => <VideosViewComp results={VIDEOS} query='madonna' />
