import React, { useEffect } from 'react'
import type { AppProps } from 'next/app'
import { UserContext } from '../context/UserContext'
import { useUserStateSyncedWithCookies } from '../hooks/useUserStateSyncedWithCookies'
import '../styles/base.css'
import '../styles/odometer.css'

import Router from 'next/router'
import NProgress from 'nprogress' // nprogress module
import 'nprogress/nprogress.css' // styles of nprogress

// Binding events.
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function ElliotApp({ Component, pageProps }: AppProps) {
  const user = useUserStateSyncedWithCookies()

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
