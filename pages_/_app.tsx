import React, { useEffect } from 'react'
import type { AppProps } from 'next/app'
import { UserContext } from '../context/UserContext'
import { useUserContext } from '../hooks/useUserContext'
import '../styles/base.css'
import '../styles/odometer.css'

function ElliotApp({ Component, pageProps }: AppProps) {
  const user = useUserContext()

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
