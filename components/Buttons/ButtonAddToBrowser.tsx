import React, { useEffect, useState } from 'react'
import ButtonPrimary from './ButtonPrimary'
import useTranslation from 'next-translate/useTranslation'
import config from '../../appConfig'
import { isChrome, isFirefox } from 'react-device-detect'

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

export default function ButtonAddToBrowser () {
  const { t } = useTranslation()
  const [isBrowser, setIsBrowser] = useState('')

  useEffect(() => {
    if (isChrome) {
      setIsBrowser('chrome')
      /* eslint-disable-next-line no-undef */
      chrome.runtime.sendMessage(config.CHROME_EXTENSION_ID, {
        action: 'id',
        value: config.CHROME_EXTENSION_ID,
      })
    }

    if (isFirefox) {
      setIsBrowser('firefox')
    }
  }, [])

  return (
    <div className='hideSmallScreen'>
      {isBrowser !== '' && (
        <ButtonPrimary big linkHref={buttonInfo[isBrowser].url}>
          {t(buttonInfo[isBrowser].label)}
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
