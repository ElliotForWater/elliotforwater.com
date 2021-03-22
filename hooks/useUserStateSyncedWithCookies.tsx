import { useState, useCallback, useMemo } from 'react'
import { UserContextProps, UserState, USER_STATE_DEFAULT } from '../context/UserContext'
import {
  COOKIE_NAME_LANGUAGE,
  COOKIE_NAME_ADULT_FILTER,
  COOKIE_NAME_NEW_TAB,
  COOKIE_NAME_SEARCH_COUNT,
} from '../helpers/_cookies'
import Cookies from 'js-cookie'

type CookieMap = { [cookieName: string]: string }

const cookiesName = {
  numOfSearches: COOKIE_NAME_SEARCH_COUNT,
  language: COOKIE_NAME_LANGUAGE,
  adultContentFilter: COOKIE_NAME_ADULT_FILTER,
  openInNewTab: COOKIE_NAME_NEW_TAB,
}

const mergeCookiesWithUserState = (defaultUserState: UserState, serverCookies?: CookieMap): UserState => {
  const newUserState = { ...defaultUserState }

  function getCookie(name: string): string {
    return serverCookies ? serverCookies[name] : Cookies.get(name)
  }

  const numOfSearches = getCookie(cookiesName.numOfSearches)
  if (numOfSearches !== undefined) {
    newUserState.numOfSearches = Number(numOfSearches)
  }

  const language = getCookie(cookiesName.language)
  if (language !== undefined) {
    newUserState.language = Number(language)
  }

  const adultContentFilter = getCookie(cookiesName.adultContentFilter)
  if (adultContentFilter !== undefined) {
    newUserState.adultContentFilter = Number(adultContentFilter)
  }

  const openInNewTab = getCookie(cookiesName.openInNewTab)
  if (openInNewTab !== undefined) {
    newUserState.openInNewTab = openInNewTab !== 'false'
  }

  return newUserState
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
