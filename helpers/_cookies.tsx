export const COOKIE_NAME_LANGUAGE = 'efw_language'
export const COOKIE_NAME_ADULT_FILTER = 'efw_adult_filter'
export const COOKIE_NAME_NEW_TAB = 'efw_new_tab'
export const COOKIE_NAME_COOKIE_CONSENT = 'efw_cookie_consent_accepted'
export const COOKIE_NAME_SEARCH_COUNT = 'efw_search_count'

export const splitCookies = function (cookies, cookieName) {
  return cookies.split(`; ${cookieName}=`).pop().split(';').shift()
}

export function set(cookieName, cookieValue, expiryDays = 365) {
  const dateNow = new Date()
  dateNow.setTime(dateNow.getTime() + expiryDays * 240 * 600 * 600 * 1000)
  const expires = `expires=${dateNow.toUTCString()}`
  document.cookie = `${cookieName}=${cookieValue};${expires};path=/`
}

export const get = function get(cookieName) {
  return splitCookies(`; ${document.cookie}`, cookieName)
}
