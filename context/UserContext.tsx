import React from 'react'
export interface UserState {
  numOfSearches: number
  language: number
  adultContentFilter: number
  openInNewTab: boolean
  isModalOpen: boolean
}
export interface UserContextProps {
  userState: UserState
  setUserState: (userState: Partial<UserState>) => void
}

export const USER_STATE_DEFAULT: UserState = {
  numOfSearches: 0,
  language: 1, // English
  adultContentFilter: 1, // Moderate
  openInNewTab: false,
  isModalOpen: false,
}

const USER_CONTEXT_DEFAULT: UserContextProps = {
  userState: USER_STATE_DEFAULT,
  setUserState: () => {},
}

export const UserContext = React.createContext<UserContextProps>(USER_CONTEXT_DEFAULT)
