import React from 'react'
import {
  COOKIE_NAME_LANGUAGE,
  COOKIE_NAME_ADULT_FILTER,
  COOKIE_NAME_NEW_TAB,
  COOKIE_NAME_SEARCH_COUNT,
} from '../helpers/_cookies'
import Cookies from 'js-cookie'

const searchesFromCookies = Cookies.get(COOKIE_NAME_SEARCH_COUNT)
const languageFromCookies = Cookies.get(COOKIE_NAME_LANGUAGE)
const filterFromCookies = Cookies.get(COOKIE_NAME_ADULT_FILTER)
const newTabFromCookies = Cookies.get(COOKIE_NAME_NEW_TAB)
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
  numOfSearches: Number(searchesFromCookies) || 0,
  language: Number(languageFromCookies) || 1, // English
  adultContentFilter: Number(filterFromCookies) || 1, // Moderate
  openInNewTab: newTabFromCookies !== 'false' || false,
  isModalOpen: false,
}

const USER_CONTEXT_DEFAULT = {
  userState: USER_STATE_DEFAULT,
  setNextUserState: () => {},
}

export const UserContext = React.createContext<userContextProps>(USER_CONTEXT_DEFAULT)
