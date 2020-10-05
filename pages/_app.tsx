import React from 'react'
import '../styles/base.css'
require('es6-promise').polyfill()


export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
