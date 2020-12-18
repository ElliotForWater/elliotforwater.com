import React from 'react'
import { shallow } from 'enzyme'
import ImagesView from './ImagesView'
import { render, screen } from '@testing-library/react'
import IMAGES from '../../__mocks__/imageApi.json'

describe('ImagesView', () => {
  it('should render without throwing an error', function () {
    const wrap = shallow(<ImagesView images={IMAGES.imageResults.items} query='goat' />)
    expect(wrap).toBeDefined()
  })

  it('should render 17 images', function () {
    render(<ImagesView images={IMAGES.imageResults.items} query='goat' />)
    const img = screen.getAllByRole('link')
    expect(img.length).toBe(17)
  })
})
