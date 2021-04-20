import React from 'react'
import Person from './Person'
import { render, screen } from '@testing-library/react'

describe('Person', () => {
  it('should render person name and picture', function () {
    render(
      <Person name='James Ross' profilePic={{ url: 'https://thispersondoesnotexist.com/image', title: 'my pic' }} />
    )
    expect(screen.getByText('James Ross')).toBeDefined()
    expect(screen.getByRole('img')).toBeDefined()
  })
})
