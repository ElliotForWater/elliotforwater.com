import Cookies from 'js-cookie'

export const COOKIE_NAME_LANGUAGE = 'efw_language'
export const COOKIE_NAME_ADULT_FILTER = 'efw_adult_filter'
export const COOKIE_NAME_NEW_TAB = 'efw_new_tab'
export const COOKIE_NAME_COOKIE_CONSENT = 'efw_cookie_consent_accepted'
export const COOKIE_NAME_SEARCH_COUNT = 'efw_search_count'

type CookieName =
  | typeof COOKIE_NAME_LANGUAGE
  | typeof COOKIE_NAME_ADULT_FILTER
  | typeof COOKIE_NAME_NEW_TAB
  | typeof COOKIE_NAME_COOKIE_CONSENT
  | typeof COOKIE_NAME_SEARCH_COUNT

export type CookieMap = { [cookieName: string]: string }

function convertAdultFilter(value) {
  switch (value) {
    case 'Off':
      return (value = 'Off')
    case 'Moderate':
      return (value = 'Moderate')
    case 'Strict':
      return (value = 'Strict')
    default:
      return (value = 'Moderate')
  }
}

function convertCookieValue(name: CookieName, value?: string): string | number | boolean {
  if (value === undefined) {
    return value
  }

  switch (name) {
    case COOKIE_NAME_SEARCH_COUNT:
    case COOKIE_NAME_LANGUAGE:
      return Number(value)

    case COOKIE_NAME_ADULT_FILTER:
      return convertAdultFilter(value)

    case COOKIE_NAME_NEW_TAB:
      return value !== 'false'

    default:
      return value
  }
}

export function getCookie(name: CookieName, cookieMap?: CookieMap) {
  const value = cookieMap ? cookieMap[name] : Cookies.get(name)
  return convertCookieValue(name, value)
}

export function setCookie(name: CookieName, value: string, opts?: { expires: number }): void {
  if (name === COOKIE_NAME_ADULT_FILTER) {
    value = convertAdultFilter(value)
  }
  Cookies.set(name, value, opts)
}
