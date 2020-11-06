import React from 'react'
import type { AppProps } from 'next/app'
import Router from 'next/router'
import withGA from 'next-ga'
import config from '../appConfig'
import '../styles/base.css'
require('es6-promise').polyfill()

export function MyApp ({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default withGA(config.gaId, Router)(MyApp)
