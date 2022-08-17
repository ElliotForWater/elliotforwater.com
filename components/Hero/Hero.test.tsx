import React from 'react'
import Hero from './Hero'
import { render } from '@testing-library/react'

describe('Hero', () => {
  it('should render without throwing an error', function () {
    const { container } = render(
      <Hero
        imageUrl='https://images.ctfassets.net/3qtdrevau8ui/5hMuK9cWqpVntZ21DhF4YE/625c296a5ca47192171006e60c9aca4e/piggy-money.png'
        title="I'm a super hero!!"
        subtitle='I will save you forever and ever and ever...'
        withBrowserCta
      />
    )
    expect(container).toBeDefined()
  })
})
