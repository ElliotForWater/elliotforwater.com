import React, { useState, useEffect } from 'react'
import type { AppProps } from 'next/app'
import { UserContext } from '../context/UserContext'
import '../styles/base.css'
import '../styles/odometer.css'
require('es6-promise').polyfill()

let cookieHelper
if (typeof window !== 'undefined') {
  cookieHelper = require('../helpers/_cookies')
}

function ElliotApp ({ Component, pageProps }: AppProps) {
  const userState = {
    numOfSearches: 0,
  }

  const [userContext, setUserContext] = useState(userState)

  useEffect(() => {
    import('../webComponents/CookiePolicy/CookiePolicy')
    import('../helpers/_cookies')

    setUserContext({
      numOfSearches: cookieHelper.get(cookieHelper.COOKIE_NAME_SEARCH_COUNT),
    })
  }, [])

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
