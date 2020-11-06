/* NOT USED YET */

/* search functionality */
/* eslint-disable */
import url from '../../helpers/_urlHelper.js'
import * as submitButtonHelper from './submit-button'

const searchQuery = document.querySelectorAll('.search__input')
const urlParam = url.getUrlParameter('q')

window.addEventListener('DOMContentLoaded', function (e) {
  searchQuery.forEach(function (key) {
    key.value = urlParam
    key.focus()
  })
})
submitButtonHelper.initialiseSearchForm()
/* eslint-disable */
/* end search functionality */
