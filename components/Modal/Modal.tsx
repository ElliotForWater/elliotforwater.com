import React, { ReactElement, useRef } from 'react'
import ReactDOM from 'react-dom'
import classnames from 'classnames'
import { HOST_ELEMENT_ID, ModalContext } from '../../context/ModalContext'
import { useModalContext } from '../../hooks/useModalContext'
import { isBrowser } from '../../helpers/_utils'
import { ModalHost } from './ModalHost'
import { ModalContent } from './ModalContent'
import styles from './Modal.module.css'

interface modalProps {
  isOpen: boolean
  onDismiss: () => void
  children: ReactElement
  className?: string
}

const Modal = ({ isOpen, onDismiss, children, className, ...props }: modalProps) => {
  const ref = useRef(null)
  const modal = useModalContext()
  modal.modalState.parentRef = ref
  modal.modalState.onDismiss = onDismiss

  if (!isOpen) {
    return null
  }
  const hostElement = document.getElementById(HOST_ELEMENT_ID)

  const content = (
    <ModalContext.Provider value={modal}>
      <div className={classnames(styles.modal, className)} ref={ref} {...props}>
        {children}
      </div>
    </ModalContext.Provider>
  )

  // React Portal is not suppored in SSR: https://github.com/tajo/react-portal/issues/217
  if (hostElement && isBrowser()) {
    return ReactDOM.createPortal(content, hostElement)
  }

  console.warn('Could not find "<Modal.Host />" node.\n Switched to inline rendering mode.')

  return content
}

Modal.Host = ModalHost
Modal.Content = ModalContent

export default Modal
