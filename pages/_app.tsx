import React, { useState, useEffect } from 'react'
import type { AppProps } from 'next/app'
import { UserContext } from '../context/UserContext'
import '../styles/base.css'
require('es6-promise').polyfill()

let cookieHelper
if (typeof window !== 'undefined') {
  cookieHelper = require('../helpers/_cookies')
}

function ElliotApp ({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import('../webComponents/CookiePolicy/CookiePolicy')
    import('../helpers/_cookies')
  }, [])

  const searchesFromCookies = cookieHelper?.get(cookieHelper?.COOKIE_NAME_SEARCH_COUNT)
  const userState = {
    numOfSearches: searchesFromCookies || 0,
  }
  const [userContext, setUserContext] = useState(userState)

  useEffect(() => {
    cookieHelper?.set(cookieHelper?.COOKIE_NAME_SEARCH_COUNT, userContext.numOfSearches)
  }, [userContext])

  return (
    <UserContext.Provider value={[userContext, setUserContext]}>
      <Component {...pageProps} />
    </UserContext.Provider>
  )
}

export default ElliotApp
