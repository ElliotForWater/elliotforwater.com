import { useState, useCallback } from 'react'
import { modalContextProps, MODAL_DEFAULT } from '../context/ModalContext'

export const useModalContext = (): modalContextProps => {
  const [modalState, setModalContext] = useState(MODAL_DEFAULT)

  const setNextModalState = useCallback((nextState): void => {
    setModalContext((prevState) => ({
      ...prevState,
      ...nextState,
    }))
  }, [])

  return {
    modalState,
    setNextModalState,
  }
}
