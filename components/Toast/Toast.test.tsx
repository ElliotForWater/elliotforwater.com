import React from 'react'
import Toast from './Toast'
import { shallow } from 'enzyme'
import { render, fireEvent } from '@testing-library/react'

describe('Toast', () => {
  describe('render', () => {
    it('should display the title', () => {
      const expectedValue = 'Some Test Text'
      const { getByText } = render(<Toast {...{ title: expectedValue }} />)
      const textElement = getByText(expectedValue)
      expect(textElement).toBeDefined()
    })

    it('should display the message', () => {
      const expectedValue = 'Some Test Text'
      const { getByText } = render(<Toast {...{ message: expectedValue }} />)
      const textElement = getByText(expectedValue)
      expect(textElement).toBeDefined()
    })

    it('should set the backgroundColor', () => {
      const expectedValue = '#fff'
      const toast = Toast({ backgroundColor: expectedValue })
      expect(toast.props.style).toMatchObject({ backgroundColor: expectedValue })
    })

    it('should set the alt tag to the title', () => {
      const expectedValue = 'Some test text'
      const { getByAltText } = render(<Toast {...{ title: expectedValue }} />)
      const imageElement = getByAltText(expectedValue)
      expect(imageElement).toBeDefined()
    })

    it('should display the icon', () => {
      const expectedValue = 'Some test text'
      const expectedIcon = 'test.jpg'
      const wrap = shallow(<Toast {...{ title: expectedValue, icon: expectedIcon }} />)
      expect(wrap.find('img').props().src).toEqual(expectedIcon)
    })

    it('should call the function when X button clicked', () => {
      const handleClick = jest.fn()
      const { getByText } = render(<Toast {...{ onDelete: handleClick }} />)
      const button = getByText('X')
      fireEvent.click(button)
      expect(handleClick).toHaveBeenCalledTimes(1)
    })
  })
})
