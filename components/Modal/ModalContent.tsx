import React, { useContext, useRef, useEffect, useCallback, ReactElement } from 'react'
import classnames from 'classnames'
import { ModalContext } from '../../context/ModalContext'
import styles from './Modal.module.css'

interface modalContentProps {
  className?: string
  children: ReactElement
}

function useOutsideClick(ref, parentRef, callback) {
  const handleMouseDown = useCallback(
    (event) => {
      if (ref && ref.current && !ref.current.contains(event.target)) {
        if (callback) {
          return callback()
        }
      }
    },
    [callback, ref]
  )

  useEffect(() => {
    const parentElem = parentRef.current
    parentElem.addEventListener('mousedown', handleMouseDown)

    return () => parentElem.removeEventListener('mousedown', handleMouseDown)
  }, [handleMouseDown, parentRef])
}

export const ModalContent = ({ className, ...props }: modalContentProps) => {
  const modalContentEl = useRef(null)
  const { modalState } = useContext(ModalContext)

  useOutsideClick(modalContentEl, modalState.parentRef, modalState.onDismiss)

  return <div className={classnames(styles.modalContent, className)} ref={modalContentEl} {...props} />
}
