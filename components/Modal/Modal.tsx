import React, { useState, useEffect } from 'react'
import styles from './Modal.module.css'

const Modal = ({ isOpenTrigger, callbackCloseModal, children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  useEffect(() => {
    setIsOpen(isOpenTrigger)
  }, [isOpenTrigger])

  return (
    <>
      {isOpen && (
        <div className={styles.modalBackground}>
          <div className={styles.modalCard}>
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
