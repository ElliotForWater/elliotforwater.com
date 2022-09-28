import React from 'react'
import { render, screen, within } from '@testing-library/react'
import ContactForm from './ContactForm'

describe('ContactForm', () => {
  it('should render without throwing an error', function () {
    render(<ContactForm />)
    const button = screen.getByRole('button')
    expect(within(button).getByText('common:forms.submit')).toBeDefined()
  })
})
