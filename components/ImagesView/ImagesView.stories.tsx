import React from 'react'
import ImagesViewComp from './ImagesView'
import IMAGES from '../../__mocks__/imageApi.json'

export default { title: 'Components/ImagesView' }

export const ImagesView = () => <ImagesViewComp images={IMAGES.imageResults.items} query='bread' />
