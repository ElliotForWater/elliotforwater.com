import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Modal from './Modal'

describe('Modal', () => {
  it('should call callbackCloseModal on click X', function () {
    let mockCloseState = true
    render(
      <Modal isOpenTrigger callbackCloseModal={() => (mockCloseState = false)}>
        {' '}
        Some text
      </Modal>
    )
    const closeIcon = screen.queryByText('X')
    expect(closeIcon).toBeDefined()
    fireEvent.click(closeIcon)
    expect(mockCloseState).toBeFalsy()
  })
})
