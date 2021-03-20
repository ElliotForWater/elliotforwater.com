import { useState, useCallback } from 'react'
import { UserContextProps, UserState, USER_STATE_DEFAULT } from '../context/UserContext'
import {
  COOKIE_NAME_LANGUAGE,
  COOKIE_NAME_ADULT_FILTER,
  COOKIE_NAME_NEW_TAB,
  COOKIE_NAME_SEARCH_COUNT,
} from '../helpers/_cookies'
import Cookies from 'js-cookie'

const cookiesName = {
  numOfSearches: COOKIE_NAME_SEARCH_COUNT,
  language: COOKIE_NAME_LANGUAGE,
  adultContentFilter: COOKIE_NAME_ADULT_FILTER,
  openInNewTab: COOKIE_NAME_NEW_TAB,
}

const mergeCookiesWithUserState = (defaultUserState: UserState): UserState => {
  const newUserState = { ...defaultUserState }

  const numOfSearches = Cookies.get(cookiesName.numOfSearches)
  if (numOfSearches !== undefined) {
    newUserState.numOfSearches = Number(numOfSearches)
  }

  const language = Cookies.get(cookiesName.language)
  if (language !== undefined) {
    newUserState.language = Number(language)
  }

  const adultContentFilter = Cookies.get(cookiesName.adultContentFilter)
  if (adultContentFilter !== undefined) {
    newUserState.adultContentFilter = Number(adultContentFilter)
  }

  const openInNewTab = Cookies.get(cookiesName.openInNewTab)
  if (openInNewTab !== undefined) {
    newUserState.openInNewTab = openInNewTab !== 'false'
  }

  return newUserState
}

export const useUserStateSyncedWithCookies = (): UserContextProps => {
  const initialUserState = mergeCookiesWithUserState(USER_STATE_DEFAULT)
  const [userState, _setUserState] = useState<UserState>(initialUserState)

  const setUserState = useCallback((nextState: Partial<UserState>): void => {
    _setUserState((prevState) => {
      const newState = {
        ...prevState,
        ...nextState,
      }

      for (const key in nextState) {
        if (Object.getOwnPropertyDescriptor(cookiesName, key)) {
          Cookies.set(cookiesName[key], newState[key], { expires: 365 })
        }
      }

      return newState
    })
  }, [])

  return {
    userState,
    setUserState,
  }
}
