import React from 'react'
import { render, screen, within } from '@testing-library/react'
import Footer from './Footer'

describe('Footer', () => {
  it('should render without throwing an error', function () {
    render(<Footer />)
    const firstH4 = screen.getAllByRole('heading', { level: 4 })[0]
    expect(within(firstH4).getByText('common:footer.social_with_us')).toBeDefined()
  })
})
