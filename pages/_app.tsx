import React, { useEffect } from 'react'
import type { AppProps } from 'next/app'
import { UserContext } from '../context/UserContext'
import { useUserContext } from '../hooks/useUserContext'
import '../styles/base.css'
import '../styles/odometer.css'

import Router from 'next/router'
import NProgress from 'nprogress' // nprogress module
import 'nprogress/nprogress.css' // styles of nprogress

import Cookies from 'js-cookie'
import {
  COOKIE_NAME_LANGUAGE,
  COOKIE_NAME_ADULT_FILTER,
  COOKIE_NAME_NEW_TAB,
  COOKIE_NAME_SEARCH_COUNT,
} from '../helpers/_cookies'

// Binding events.
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const cookiesName = {
  numOfSearches: COOKIE_NAME_SEARCH_COUNT,
  language: COOKIE_NAME_LANGUAGE,
  adultContentFilter: COOKIE_NAME_ADULT_FILTER,
  openInNewTab: COOKIE_NAME_NEW_TAB,
}

const setCookiesToState = (userState) => {
  for (const key in userState) {
    if (cookiesName[key]) {
      if (!Cookies.get(cookiesName[key])) {
        Cookies.set(cookiesName[key], userState[key])
      } else {
        userState[key] = Cookies.get(cookiesName[key])
        Cookies.set(cookiesName[key], Cookies.get(cookiesName[key]))
      }
    }
  }
}

function ElliotApp({ Component, pageProps }: AppProps) {
  const user = useUserContext()
  setCookiesToState(user.userState)

  useEffect(() => {
    import('../webComponents/CookiePolicy/CookiePolicy')
  }, [])

  return (
    <UserContext.Provider value={user}>
      <Component {...pageProps} />
    </UserContext.Provider>
  )
}

export default ElliotApp
