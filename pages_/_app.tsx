import React from 'react'
import type { AppProps } from 'next/app'
import '../styles/base.css'
require('es6-promise').polyfill()

function ElliotApp ({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default ElliotApp
