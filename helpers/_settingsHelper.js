/* eslint-disable */
import * as cookieHelper from './_cookies'

export function update(languageId, adultFilterId, newTab) {
  cookieHelper.set(cookieHelper.COOKIE_NAME_LANGUAGE, languageId)
  cookieHelper.set(cookieHelper.COOKIE_NAME_ADULT_FILTER, adultFilterId)
  cookieHelper.set(cookieHelper.COOKIE_NAME_NEW_TAB, newTab)
}

export function initialise() {
  const form = document.getElementById('frm-user-settings')
  if (form === null) return

  form.addEventListener('submit', function (event) {
    event.preventDefault()
    update(
      form.elements.SelectedLanguageId.value,
      form.elements.SelectedAdultContentFilterId.value,
      form.elements.CheckNewTab[0].checked
    )
    $('#settings-modal').modal('hide')
  })
}
/* eslint-disable */
