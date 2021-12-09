import React, { useEffect, useState } from 'react'
import ButtonPrimary from './ButtonPrimary/ButtonPrimary'
import ButtonFull from './ButtonFull/ButtonFull'
import useTranslation from 'next-translate/useTranslation'
import config from '../../appConfig'
import { isBrowser, isChrome, isFirefox } from 'react-device-detect'

const buttonInfo = {
  chrome: {
    url: config.CHROME_EXTENSION_URL,
    label: 'common:addToChrome',
  },
  firefox: {
    url: config.FF_EXTENSION_URL,
    label: 'common:addToFirefox',
  },
}

declare global {
  interface Window {
    extensionInterface: any
  }
}

interface Props {
  customStyle?: { color: string; background: string; colorHover: string; backgroundHover: string }
  size?: 'big' | 'small'
  type?: 'primary' | 'full'
}

export default function ButtonAddToBrowser({ type = 'primary', size = 'big', customStyle }: Props) {
  const { t } = useTranslation()
  const [browserName, setBrowserName] = useState('')

  useEffect(() => {
    if (isBrowser && isChrome) {
      /* eslint-disable no-undef */
      if (chrome.runtime) {
        chrome.runtime.sendMessage(
          config.CHROME_EXTENSION_ID,
          {
            message: config.CHROME_EXTENSION_ID,
          },
          function (reply) {
            if (!reply) {
              setBrowserName('chrome')
            }
          }
        )
      }
      /* eslint-enable no-undef */
    }

    if (isFirefox) {
      // check msg from extension content-script.js
      // if extension is NOT installed
      if (!window.extensionInterface) {
        setBrowserName('firefox')
      }
    }
  }, [])

  return (
    <>
      {isBrowser && browserName !== '' && (
        <>
          {type === 'full' && (
            <ButtonFull size={size} linkHref={buttonInfo[browserName].url} customStyle={customStyle}>
              {t(buttonInfo[browserName].label)}
            </ButtonFull>
          )}

          {type === 'primary' && (
            <ButtonPrimary size={size} linkHref={buttonInfo[browserName].url}>
              {t(buttonInfo[browserName].label)}
            </ButtonPrimary>
          )}
        </>
      )}
    </>
  )
}
