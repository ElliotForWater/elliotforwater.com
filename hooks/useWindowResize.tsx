import { useState, useEffect } from 'react'

export function useWindowResize() {
  const isClient = typeof window === 'object'

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined,
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
