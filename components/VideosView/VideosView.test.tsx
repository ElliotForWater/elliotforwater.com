import React from 'react'
import VideosView from './VideosView'
import { render, screen } from '@testing-library/react'
import VIDEOS from '../../__mocks__/videoApi.json'

describe('VideosView', () => {
  it('should render without throwing an error', function () {
    const { container } = render(<VideosView videos={VIDEOS.value} query='madonna' />)
    expect(container).toBeDefined()
  })

  it('should render all videos results', function () {
    render(<VideosView videos={VIDEOS.value} query='madonna' />)
    const img = screen.getAllByRole('link')
    expect(img.length).toBe(105)
  })

  it('should render no result title', function () {
    const noResQuery = 'hfkajdhfkahdfj'
    render(<VideosView videos={[]} query={`${noResQuery}`} />)
    const title = screen.getByText(/no_result_found/i)
    expect(title).toBeDefined()
  })

  it('should be empty', function () {
    const { container } = render(<VideosView videos={undefined} query='madonna' />)
    expect(container.firstChild).toBeNull()
  })
})
