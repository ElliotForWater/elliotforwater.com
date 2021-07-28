import React, { useEffect, useState } from 'react'
import ButtonPrimary from './ButtonPrimary/ButtonPrimary'
import useTranslation from 'next-translate/useTranslation'
import config from '../../appConfig'
import { isBrowser, isChrome, isFirefox } from 'react-device-detect'

declare const window: any

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
      // check msg from extension content-script.js
      window.addEventListener('message', function (event) {
        const { source, data } = event
        if (source === window && data?.target === 'content-script-ff' && data?.message !== 'installed') {
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
