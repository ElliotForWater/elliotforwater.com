import React from 'react'
import ToastList from './ToastList'
import { fireEvent, render, screen } from '@testing-library/react'

describe('ToastList', () => {
  const firstTitle = 'first title'
  const secondTitle = 'another title'

  let toastList
  beforeEach(async () => {
    toastList = [
      {
        title: firstTitle,
      },
      {
        title: secondTitle,
      },
    ]
  })

  describe('render', () => {
    it('should display some toasts', () => {
      render(<ToastList {...{ toastList: toastList }} />)
      expect(screen.getAllByRole('button').length).toBe(2)
    })

    it('should remove the first toast from the list', () => {
      // Arrange
      render(<ToastList {...{ toastList: toastList }} />)
      const firstToast = screen.getAllByRole('button')[0]

      // Act
      fireEvent.click(firstToast)

      // Assert
      expect(screen.getAllByRole('button').length).toBe(1)
      expect(screen.getByText(secondTitle)).toBeDefined()
      expect(screen.queryByText(firstTitle)).toBeNull()
    })

    it('should remove the second toast from the list', () => {
      // Arrange
      render(<ToastList {...{ toastList: toastList }} />)
      const secondToast = screen.getAllByRole('button')[1]

      // Act
      fireEvent.click(secondToast)

      // Assert
      expect(screen.getAllByRole('button').length).toBe(1)
      expect(screen.getByText(firstTitle)).toBeDefined()
      expect(screen.queryByText(secondTitle)).toBeNull()
    })
  })
})
