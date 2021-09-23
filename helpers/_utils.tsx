export function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
}

/* Checks if in browser environment and not in SSR */
export const isBrowser = () => !!(typeof window !== 'undefined' && window.document && window.document.createElement)

export function queryNoWhiteSpace(query: string) {
  return encodeURIComponent(query).replace(/%20/g, '+')
}

export function getGeoloc() {
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(function (position) {
      const latLong = { lat: position.coords.latitude, lng: position.coords.longitude }
      return latLong
    })
  }
}

export async function getClientIp() {
  const res = await fetch('https://api.ipify.org?format=json')

  if (res.ok) {
    const objIp = await res.json()
    return objIp.ip
  } else {
    console.error('Problem fetching my IP')
  }
}
