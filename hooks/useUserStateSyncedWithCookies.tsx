import { useState, useCallback, useMemo } from 'react'
import { UserContextProps, UserState, USER_STATE_DEFAULT } from '../context/UserContext'
import {
  COOKIE_NAME_LANGUAGE,
  COOKIE_NAME_ADULT_FILTER,
  COOKIE_NAME_NEW_TAB,
  COOKIE_NAME_SEARCH_COUNT,
  getCookie,
  CookieMap,
  setCookie,
} from '../helpers/_cookies'

const mergeCookiesWithUserState = (defaultUserState: UserState, serverCookies?: CookieMap): UserState => {
  const newUserState = { ...defaultUserState }

  const numOfSearches = getCookie(COOKIE_NAME_SEARCH_COUNT, serverCookies)
  if (numOfSearches !== undefined) {
    newUserState.numOfSearches = Number(numOfSearches)
  }

  const language = getCookie(COOKIE_NAME_LANGUAGE, serverCookies)
  if (language !== undefined) {
    newUserState.language = Number(language)
  }

  const adultContentFilter = getCookie(COOKIE_NAME_ADULT_FILTER, serverCookies)
  if (adultContentFilter !== undefined) {
    newUserState.adultContentFilter = Number(adultContentFilter)
  }

  const openInNewTab = getCookie(COOKIE_NAME_NEW_TAB, serverCookies)
  if (openInNewTab !== undefined) {
    newUserState.openInNewTab = openInNewTab !== 'false'
  }

  return newUserState
}

const cookiesName = {
  numOfSearches: COOKIE_NAME_SEARCH_COUNT,
  language: COOKIE_NAME_LANGUAGE,
  adultContentFilter: COOKIE_NAME_ADULT_FILTER,
  openInNewTab: COOKIE_NAME_NEW_TAB,
}

export const useUserStateSyncedWithCookies = (serverCookies?: CookieMap): UserContextProps => {
  const initialUserState = useMemo(() => mergeCookiesWithUserState(USER_STATE_DEFAULT, serverCookies), [])
  const [userState, _setUserState] = useState(initialUserState)

  const setUserState = useCallback((nextState: Partial<UserState>): void => {
    _setUserState((prevState) => {
      const newState = {
        ...prevState,
        ...nextState,
      }

      for (const key in nextState) {
        if (Object.getOwnPropertyDescriptor(cookiesName, key)) {
          setCookie(cookiesName[key], newState[key], { expires: 365 })
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
