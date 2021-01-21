export const COOKIE_NAME_LANGUAGE = 'efw_language'
export const COOKIE_NAME_ADULT_FILTER = 'efw_adult_filter'
export const COOKIE_NAME_NEW_TAB = 'efw_new_tab'
export const COOKIE_NAME_COOKIE_CONSENT = 'efw_cookie_consent_accepted'
export const COOKIE_NAME_SEARCH_COUNT = 'efw_search_count'

export const splitCookies = function (cookies, cookieName) {
  return cookies.split(`; ${cookieName}=`).pop().split(';').shift()
}
