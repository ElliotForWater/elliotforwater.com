import React from 'react'
import type { AppProps } from 'next/app'
import '../styles/base.css'
require('es6-promise').polyfill()

export default function MyApp ({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
