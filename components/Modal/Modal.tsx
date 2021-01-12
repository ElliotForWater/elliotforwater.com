import React, { useState, useEffect, useRef } from 'react'
import styles from './Modal.module.css'

const Modal = ({ isOpenTrigger, callbackCloseModal, children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const modalEl = useRef(null)

  useEffect(() => {
    setIsOpen(isOpenTrigger)
  }, [isOpenTrigger])

  useEffect(() => {
    function handleClickOutside(event) {
      console.log({ event })
      console.log({ modalEl })
      const isOutsideModal = modalEl.current && !modalEl.current.contains(event.target)

      if (isOutsideModal) {
        console.log('OUTSIDE')
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [modalEl])

  return (
    <>
      {isOpen && (
        <div className={styles.modalBackground}>
          <div className={styles.modalCard} ref={modalEl}>
            <button
              className={styles.close}
              onClick={() => {
                setIsOpen(false)
                callbackCloseModal()
              }}
            >
              X
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  )
}

export default Modal
