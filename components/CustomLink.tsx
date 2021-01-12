import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

const CustomLink = (props) => {
  const [userContext] = useContext(UserContext)

  return (
    <>
      {userContext.openInNewTab ? (
        <a target='_blank' {...props}>
          {props.children}
        </a>
      ) : (
        <a {...props}>{props.children}</a>
      )}
    </>
  )
}

export default CustomLink
