import { useState, useEffect } from 'react'
import { isBrowser } from '../helpers/_utils'

export function useWindowResize() {
  function getSize() {
    return {
      width: isBrowser ? window.innerWidth : undefined,
      height: isBrowser ? window.innerHeight : undefined,
    }
  }
  const [width, setWidth] = useState(getSize().width)
  const [height, setHeight] = useState(getSize().height)

  const listener = () => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }

  useEffect(() => {
    window.addEventListener('resize', listener)
    return () => {
      window.removeEventListener('resize', listener)
    }
  }, [])

  return {
    width,
    height,
  }
}

export default useWindowResize
