/* NOT USED YET */

import url from '../../helpers/_urlHelper.js'

function setSearchFormAction (searchForm) {
  const actionType = url.setFormAction(window.location.pathname)
  searchForm.setAttribute('action', actionType)
}

function incrementOnSearch (searchForm) {
  const searchCount = document.querySelector('search-count')
  if (searchCount === null) {
    return
  }
  searchForm.addEventListener('submit', () => {
    searchCount.incrementCount()
  })
}

export function initialiseSearchForm () {
  const searchForm = document.getElementById('search__form')
  if (searchForm === null) {
    return
  }
  setSearchFormAction(searchForm)
  incrementOnSearch(searchForm)
}
