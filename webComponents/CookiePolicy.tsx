import * as cookieHelper from '../helpers/_cookies'

const template = document.createElement('template')
template.innerHTML = `
  <style>    
    .cookie-policy-wrapper {
      position: fixed;
      width: 300px;
      right: 20px;
      bottom: 60px;
      background: #FFF;
      z-index: 999;
      -webkit-box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
      box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
      -moz-box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
      border-radius: 0.5em;
    }

    .cookie-policy {
      padding: 10px 15px;
      color: #333;
      font-size: 1.2em;
    }

    .cookie-policy__text {
       margin: 0 0 10px;
    }

    .cookie-policy__link {
      color: #137393;
    }
      .cookie-policy__link:hover {
        text-decoration: underline;
      }

    .cookie-policy__button {
      display: inline-block;
      width: 100%;
      border: 0;
      border-radius: 5px;
      background: #3fa2b8;
      color: white;
      text-align: center;
      padding: 5px 0;
      transition: all 0.3s ease;
      cursor: pointer;
    }
      .cookie-policy__button:hover {
        background: #9cd5db;
      }

  </style>

  <div class="cookie-policy-wrapper">
    <div class="cookie-policy">
      <p class="cookie-policy__text">
        This website uses cookies to ensure you get the best experience on our website.
        <a class="cookie-policy__link" href="/privacy"> More Info</a>
      </p>
      <button class="cookie-policy__button" type="button">Got it</button>
    </div>
  </div>  
  `

class CookiePolicy extends HTMLElement {
  private root: ShadowRoot
  private cookiePolicyName: String
  private cookiePolicyValue: String

  constructor () {
    super()
    this.root = this.attachShadow({ mode: 'open' })
    this.root.appendChild(template.content.cloneNode(true))
    this.root.querySelector('.cookie-policy__button').addEventListener('click', () => {
      this.onAccepted()
    })
    this.cookiePolicyName = cookieHelper.COOKIE_NAME_COOKIE_CONSENT
    this.cookiePolicyValue = 'yes'
  }

  public updateDisplay (display): void {
    const elem: HTMLElement = this.root.querySelector('.cookie-policy-wrapper')
    elem.style.display = display
  }

  public connectedCallback (): void {
    if (cookieHelper.get(this.cookiePolicyName) === this.cookiePolicyValue) {
      this.updateDisplay('none')
    }
  }

  public onAccepted (): void {
    cookieHelper.set(this.cookiePolicyName, this.cookiePolicyValue)
    this.updateDisplay('none')
  }
}

customElements.define('cookie-policy', CookiePolicy)
