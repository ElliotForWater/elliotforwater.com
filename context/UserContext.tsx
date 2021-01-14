import React from 'react'
interface userState {
  numOfSearches: number
  language: number
  adultContentFilter: number
  openInNewTab: boolean
  isModalOpen: boolean
}
export interface userContextProps {
  userState: userState
  setNextUserState: (nextState) => void
}

export const USER_STATE_DEFAULT = {
  numOfSearches: 0,
  language: 1, // English
  adultContentFilter: 1, // Moderate
  openInNewTab: false,
  isModalOpen: false,
}

const USER_CONTEXT_DEFAULT = {
  userState: USER_STATE_DEFAULT,
  setNextUserState: () => {},
}

export const UserContext = React.createContext<userContextProps>(USER_CONTEXT_DEFAULT)
