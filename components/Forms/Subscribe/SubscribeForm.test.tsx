import React from 'react'
import { render, screen, within } from '@testing-library/react'
import SubscribeForm from './SubscribeForm'

describe('SubscribeForm', () => {
  it('should render without throwing an error', function () {
    render(<SubscribeForm />)
    const button = screen.getByRole('button')
    expect(within(button).getByText('common:forms.subscribe')).toBeDefined()
  })
})
