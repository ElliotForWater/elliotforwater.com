import React, { useEffect } from 'react'
import type { AppProps } from 'next/app'
import { UserContext } from '../context/UserContext'
import { useUserContext } from '../hooks/useUserContext'
import Router from 'next/router'
import * as gtag from '../helpers/_gtag'
import NProgress from 'nprogress' // nprogress module

import '../styles/base.css'
import '../styles/odometer.css'
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
Router.events.on('routeChangeComplete', (url) => {
  if (process.env.IS_PRODUCTION) {
    gtag.pageview(url)
  }
  NProgress.done()
})
Router.events.on('routeChangeError', () => NProgress.done())

// Router.events.on('routeChangeComplete', (url) => gtag.pageview(url))

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
        userState.numOfSearches = Number(Cookies.get(cookiesName.numOfSearches))
        userState.language = Number(Cookies.get(cookiesName.language))
        userState.adultContentFilter = Number(Cookies.get(cookiesName.adultContentFilter))
        userState.openInNewTab = Cookies.get(cookiesName.openInNewTab) !== 'false'

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
