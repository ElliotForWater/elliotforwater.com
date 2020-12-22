import React, { useEffect } from 'react'
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
  let browser

  if (isChrome) {
    browser = 'chrome'
  }
  if (isFirefox) {
    browser = 'firefox'
  }

  useEffect(() => {
    if (isChrome) {
      /* eslint-disable-next-line no-undef */
      chrome.runtime.sendMessage(config.CHROME_EXTENSION_ID, {
        action: 'id',
        value: config.CHROME_EXTENSION_ID,
      })
    }
  }, [])

  if (!browser) return <></>
  return (
    <div className='hideSmallScreen'>
      <ButtonPrimary big linkHref={buttonInfo[browser].url}>
        {t(buttonInfo[browser].label)}
      </ButtonPrimary>
      <style jsx>{`
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
