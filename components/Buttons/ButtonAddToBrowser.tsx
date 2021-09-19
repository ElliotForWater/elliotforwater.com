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

  useEffect(() => {
    if (isBrowser && isChrome) {
      /* eslint-disable no-undef */
      if (chrome.runtime) {
        chrome.runtime.sendMessage(
          /* eslint-enable no-undef */
          config.CHROME_EXTENSION_ID,
          {
            action: 'id',
            value: config.CHROME_EXTENSION_ID,
          },
          function (response) {
            if (!response) {
              return setBrowserName('chrome')
            }
          }
        )
      } else {
        return setBrowserName('chrome')
      }
    }

    if (isFirefox) {
      console.log('firefox')

      if (typeof window.extensionInterface !== 'undefined') {
        // Installed
        console.log('extension Interface')

        window.extensionInterface.usefulFunction()
      }

      // window.addEventListener("message", (event) => {
      //   if (event.source == window &&
      //       event.data &&
      //       event.data.direction == "from-page-script") {
      //     alert("Content script received message: \"" + event.data.message + "\"");
      //   }
      // });

      // check msg from extension content-script.js
      window.addEventListener('message', function (event) {
        console.log('message', event)

        const { source, data } = event
        if (source === window && data?.target === 'content-script-ff' && data?.message !== 'installed') {
          console.log('set firefox')
          setBrowserName('firefox')
        }
      })
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
