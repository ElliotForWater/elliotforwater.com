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

  async function sendMessageChrome() {
    /* eslint-disable no-undef */
    const req = await chrome.runtime.sendMessage(config.CHROME_EXTENSION_ID, { message: config.CHROME_EXTENSION_ID })
    console.log({ req })
    /* eslint-enable no-undef */
  }
  useEffect(() => {
    if (isBrowser && isChrome) {
      /* eslint-disable no-undef */
      if (chrome.runtime) {
        sendMessageChrome()

        // chrome.runtime.onMessage.addListener((res) => {
        //   if (res.message === 'extension_installed') {
        //     setBrowserName('')
        //   } else {
        //     setBrowserName('chrome')
        //   }
        // })
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
