import React from 'react'
import Toast from './Toast'
import ToastList from './ToastList'
import { mount } from 'enzyme'

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
      const wrapper = mount(<ToastList {...{ toastList: toastList }} />)
      expect(wrapper.findWhere((el) => el.is(Toast)).length).toEqual(2)
    })

    it('should remove the first toast from the list', () => {
      // Arrange
      const wrapper = mount(<ToastList {...{ toastList: toastList }} />)
      const firstToast = wrapper.findWhere((el) => el.is(Toast)).first()

      // Act
      firstToast.find('button').simulate('click')

      // Assert
      expect(wrapper.findWhere((el) => el.is(Toast)).length).toEqual(1)
      expect(
        wrapper
          .findWhere((el) => el.is(Toast))
          .first()
          .find('p')
          .first()
          .text(),
      ).toEqual(secondTitle)
    })

    it('should remove the second toast from the list', () => {
      // Arrange
      const wrapper = mount(<ToastList {...{ toastList: toastList }} />)
      const secondToast = wrapper.findWhere((el) => el.is(Toast)).at(1)
      // Act
      secondToast.find('button').simulate('click')

      // Assert
      expect(wrapper.findWhere((el) => el.is(Toast)).length).toEqual(1)

      expect(
        wrapper
          .findWhere((el) => el.is(Toast))
          .first()
          .find('p')
          .first()
          .text(),
      ).toEqual(firstTitle)
    })
  })
})
