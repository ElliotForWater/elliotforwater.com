import React, { useEffect } from 'react'
import type { AppProps } from 'next/app'
import '../styles/base.css'
require('es6-promise').polyfill()

function ElliotApp ({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import('../webComponents/CookiePolicy/CookiePolicy')
    import('../webComponents/SearchCounter')
  }, [])

  return <Component {...pageProps} />
}

export default ElliotApp
