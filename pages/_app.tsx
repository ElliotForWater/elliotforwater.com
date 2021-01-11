import React, { useState, useEffect } from 'react'
import type { AppProps } from 'next/app'
import { UserContext } from '../context/UserContext'
import '../styles/base.css'
import '../styles/odometer.css'

let cookieHelper
if (typeof window !== 'undefined') {
  cookieHelper = require('../helpers/_cookies')
}

function ElliotApp({ Component, pageProps }: AppProps) {
  const userState = {
    numOfSearches: 0,
    language: 1, // English
    adultContentFilter: 1, // Moderate
    openInNewTab: false,
  }

  const [userContext, setUserContext] = useState(userState)

  useEffect(() => {
    import('../webComponents/CookiePolicy/CookiePolicy')

    const searchesFromCookies = cookieHelper?.get(cookieHelper?.COOKIE_NAME_SEARCH_COUNT)
    const languageFromCookies = cookieHelper?.get(cookieHelper?.COOKIE_NAME_LANGUAGE)
    const filterFromCookies = cookieHelper?.get(cookieHelper?.COOKIE_NAME_ADULT_FILTER)
    const newTabFromCookies = cookieHelper?.get(cookieHelper?.COOKIE_NAME_NEW_TAB)

    setUserContext((prev) => ({
      ...prev,
      numOfSearches: searchesFromCookies,
      language: languageFromCookies,
      adultContentFilter: filterFromCookies,
      openInNewTab: newTabFromCookies !== 'false',
    }))
  }, [])

  useEffect(() => {
    cookieHelper?.set(cookieHelper?.COOKIE_NAME_SEARCH_COUNT, userContext.numOfSearches)
    cookieHelper?.set(cookieHelper?.COOKIE_NAME_LANGUAGE, userContext.language)
    cookieHelper?.set(cookieHelper?.COOKIE_NAME_ADULT_FILTER, userContext.adultContentFilter)
    cookieHelper?.set(cookieHelper?.COOKIE_NAME_NEW_TAB, userContext.openInNewTab)
  }, [userContext])

  return (
    <UserContext.Provider value={[userContext, setUserContext]}>
      <Component {...pageProps} />
    </UserContext.Provider>
  )
}

export default ElliotApp
