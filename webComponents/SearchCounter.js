import * as cookieHelper from '../helpers/_cookies'

const template = document && document.createElement('template')
template.innerHTML = `<span></span>`

class SearchCount extends HTMLElement {
  constructor() {
    super()
    this.root = this.attachShadow({ mode: 'open' })
    this.root.appendChild(template.content.cloneNode(true))
    this.countElement = this.root.querySelector('span')
    this.cookiePolicyName = cookieHelper.COOKIE_NAME_SEARCH_COUNT
  }

  getCount() {
    const countFromCookie = cookieHelper.get(this.cookiePolicyName)
    return countFromCookie === '' ? 0 : countFromCookie
  }

  setCount() {
    this.countElement.innerText = this.getCount()
  }

  incrementCount() {
    cookieHelper.set(this.cookiePolicyName, Number(this.getCount()) + 1)
    this.setCount()
  }

  connectedCallback() {
    this.setCount()
  }
}

customElements.define('search-count', SearchCount)
