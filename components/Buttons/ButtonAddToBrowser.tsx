import React, { useEffect, useState } from 'react'
import ButtonPrimary from './ButtonPrimary/ButtonPrimary'
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

export default function ButtonAddToBrowser() {
  const { t } = useTranslation()
  const [browserName, setBrowserName] = useState('')

  async function chromeMessage() {
    /* eslint-disable no-undef */
    const res = await chrome.runtime.sendMessage({ message: 'ddfnnfelkcabbeebchaegpcdcmdekoim' })
    /* eslint-enable no-undef */
    console.log({ res })
  }

  useEffect(() => {
    if (isBrowser && isChrome) {
      /* eslint-disable no-undef */
      if (chrome.runtime) {
        // async function chromeMessage() {
        //   const res = await chrome.runtime.sendMessage({ message: 'ddfnnfelkcabbeebchaegpcdcmdekoim'})
        //   console.log({ res })
        // }

        chromeMessage()
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
    <div className='hideSmallScreen'>
      {browserName !== '' && (
        <ButtonPrimary size='big' linkHref={buttonInfo[browserName].url}>
          {t(buttonInfo[browserName].label)}
        </ButtonPrimary>
      )}
      <style jsx>
        {`
          .hideSmallScreen {
            display: none;
          }

          @media (min-width: 768px) {
            .hideSmallScreen {
              display: block;
            }
          }
        `}
      </style>
    </div>
  )
}
