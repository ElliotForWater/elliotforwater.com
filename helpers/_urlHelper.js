// Do we use it anywhere??

const url = {
  getUrlParameter: (name) => {
    const paramName = name.replace(/[[]/, '\\[').replace(/[\]]/, '\\]')
    const regex = new RegExp(`[\\?&]${paramName}=([^&#]*)`)
    const results = regex.exec(window.location.href)
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '))
  },

  setFormAction: (path) => {
    return path.startsWith('/Search') ? path : '/Search'
  },
}

export default url
