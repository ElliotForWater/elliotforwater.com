/**
 * A web component that opens a modal dialog window
 * 24th Jul 2020 - Not currently used but thinking of using as a base to replace the Bootstrap modal
 */

const template = document.createElement('template')
template.innerHTML = `
<style>
  /* The Modal (background) */
  .modal {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    padding-top: 100px; /* Location of the box */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  }

  /* Modal Content */
  .modal-content {
    background-color: #fefefe;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
  }

  /* The Close Button */
  .close {
    color: #aaaaaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }

  .close:hover,
  .close:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }
  </style>

  <!-- Trigger/Open The Modal -->
  <button id="btnOpenModal" type="button">Open Modal</button>
  <!-- The Modal -->
  <div id="divModal" class="modal">
    <!-- Modal content -->
    <div class="modal-content">
      <span class="close">&times;</span>
      <p><slot name="modal-content">Some text in the Modal...</slot></p>
    </div>
  </div>
`

class ModalButton extends HTMLElement {
  constructor () {
    super()
    this.root = this.attachShadow({ mode: 'open' })
    this.root.appendChild(template.content.cloneNode(true))

    // Get the modal
    this.modal = this.root.getElementById('divModal')

    // Get the button that opens the modal
    this.btn = this.root.getElementById('btnOpenModal')

    // Get the <span> element that closes the modal
    this.span = this.root.querySelector('.close')

    // When the user clicks the button, open the modal
    this.btn.addEventListener('click', () => {
      this.openModal()
    })

    // When the user clicks on <span> (x), close the modal
    this.span.addEventListener('click', () => {
      this.closeModal()
    })
  }

  get text () {
    return this.getAttribute('text')
  }

  set text (newValue) {
    this.setAttribute('text', newValue)
  }

  static get observedAttributes () {
    return ['text']
  }

  attributeChangedCallback (name, oldValue, newValue) {
    this.btn.innerHTML = newValue
  }

  closeModal () {
    this.modal.style.display = 'none'

    // Raise event so consumers can do something with it
    this.dispatchEvent(new CustomEvent('modalClosed'))
  }

  openModal () {
    this.modal.style.display = 'block'

    // Raise event so consumers can do something with it
    this.dispatchEvent(new CustomEvent('modalOpened'))
  }
}

customElements.define('modal-button', ModalButton)
