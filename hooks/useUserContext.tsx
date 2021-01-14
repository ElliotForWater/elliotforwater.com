import { useState, useCallback } from 'react'
import { userContextProps, USER_STATE_DEFAULT } from '../context/UserContext'
import { set, COOKIE_NAME_LANGUAGE, COOKIE_NAME_ADULT_FILTER, COOKIE_NAME_NEW_TAB, COOKIE_NAME_SEARCH_COUNT } from '../helpers/_cookies'

export const useUserContext = (): userContextProps => {
  const [userState, setUserContext] = useState(USER_STATE_DEFAULT)
  const setNextUserState = useCallback((nextState): void => {
    setUserContext((prevState) => {
      const newState = {
        ...prevState,
        ...nextState,
      }

      set(COOKIE_NAME_SEARCH_COUNT, newState.numOfSearches)
      set(COOKIE_NAME_LANGUAGE, newState.language)
      set(COOKIE_NAME_ADULT_FILTER, newState.adultContentFilter)
      set(COOKIE_NAME_NEW_TAB, newState.openInNewTab)

      return newState
    })
  }, [])

  return {
    userState,
    setNextUserState,
  }
}
