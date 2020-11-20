import React, { useEffect, Fragment } from 'react'

export default { title: 'Components/Cookie Popup' }

export const CookiePolicy = () => {
  useEffect(() => {
    import('./CookiePolicy')
  }, [])
  return (
    <>
      <p>
        Note: If you already have accepted EFW cookies, you will not see the cookie component here
      </p>
      <cookie-policy />
    </>
  )
}
