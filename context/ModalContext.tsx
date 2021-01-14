import { createContext, RefObject } from 'react'

/* ID needed to find host element with React Portal */
export const HOST_ELEMENT_ID = 'modal-host'

type modalProps = {
  onDismiss?: () => void
  parentRef?: RefObject<HTMLElement>
}

export interface modalContextProps {
  modalState: modalProps
  setNextModalState: (nextState) => void
}

export const MODAL_DEFAULT = {
  onDismiss: () => {},
}

const MODAL_CONTEXT_DEFAULT = {
  modalState: MODAL_DEFAULT,
  setNextModalState: () => {},
}

export const ModalContext = createContext<modalContextProps>(MODAL_CONTEXT_DEFAULT)
