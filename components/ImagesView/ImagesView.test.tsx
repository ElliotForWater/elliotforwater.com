import React from 'react'
import ImagesView from './ImagesView'
import { render, screen } from '@testing-library/react'
import IMAGES from '../../__mocks__/imageApi.json'

describe('ImagesView', () => {
  it('should render without throwing an error', function () {
    const { container } = render(<ImagesView images={IMAGES.value} query='goat' />)
    expect(container).toBeDefined()
  })

  it('should render 17 images', function () {
    render(<ImagesView images={IMAGES.value} query='goat' />)
    const img = screen.getAllByRole('link')
    expect(img.length).toBe(150)
  })

  it('should render no result title', function () {
    const noResQuery = 'hfkajdhfkahdfj'
    render(<ImagesView images={[]} query={`${noResQuery}`} />)
    const title = screen.getByText(/no_result_found/i)
    expect(title).toBeDefined()
  })

  it('should be empty', function () {
    const { container } = render(<ImagesView images={undefined} query='goat' />)
    expect(container.firstChild).toBeNull()
  })
})
