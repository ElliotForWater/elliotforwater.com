import { useState, useCallback, useEffect } from 'react'

export const useMediaQuery = (width) => {
  const [targetReached, setTargetReached] = useState(false)

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true)
    } else {
      setTargetReached(false)
    }
  }, [])

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`)

    if (media.addEventListener) {
      media.addEventListener('change', (e) => {
        updateTarget(e)
      })
    } else {
      // Fix for older browsers that don't support media.addEventListner
      media.addListener((e) => {
        updateTarget(e)
      })
    }

    if (media.matches) {
      setTargetReached(true)
    }

    return () => {
      if (media.removeEventListener) {
        media.removeEventListener('change', (e) => {
          updateTarget(e)
        })
      } else {
        // Fix for older browsers that don't support media.addEventListner
        media.removeListener((e) => {
          updateTarget(e)
        })
      }
    }
  }, [])

  return targetReached
}
