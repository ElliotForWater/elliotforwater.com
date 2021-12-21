import React, { useEffect } from 'react'
import App, { AppContext } from 'next/app'
import type { AppProps } from 'next/app'
import { UserContext } from '../context/UserContext'
import { useUserStateSyncedWithCookies } from '../hooks/useUserStateSyncedWithCookies'
import Router from 'next/router'
import * as gtag from '../helpers/_gtag'
import NProgress from 'accessible-nprogress' // nprogress module

import '../styles/base.css'
import '../styles/odometer.css'
import 'accessible-nprogress/dist/accessible-nprogress.css' // styles of nprogress
import { CookieMap } from '../helpers/_cookies'

// Binding routes events.
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', (url) => {
  if (process.env.NEXT_PUBLIC_IS_PRODUCTION) {
    gtag.pageview(document.title, location.href, url)
  }
  NProgress.done()
})
Router.events.on('routeChangeError', () => NProgress.done())

interface ElliotAppProps extends AppProps {
  serverCookies?: CookieMap
}

function ElliotApp({ Component, pageProps, serverCookies }: ElliotAppProps) {
  const user = useUserStateSyncedWithCookies(serverCookies)
  useEffect(() => {
    import('../webComponents/CookiePolicy/CookiePolicy')
    if (process.env.NEXT_PUBLIC_IS_PRODUCTION) {
      gtag.pageview(document.title, location.href, location.pathname + location.search)
    }
  }, [])

  return (
    <UserContext.Provider value={user}>
      <Component {...pageProps} />
    </UserContext.Provider>
  )
}

// Getting cookies from the request on every server-side render.
// Warning: This disables the ability to perform automatic static optimization.
// https://nextjs.org/docs/advanced-features/custom-app
ElliotApp.getInitialProps = async (appContext: AppContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext)

  const serverCookies: CookieMap = appContext.ctx.req && (appContext.ctx.req as any).cookies

  return { ...appProps, serverCookies }
}

export default ElliotApp
