export function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
}

/* Checks if in browser environment and not in SSR */
export const isBrowser = () => !!(typeof window !== 'undefined' && window.document && window.document.createElement)

export function queryNoWitheSpace(query) {
  return query.replace(/\s/g, '+')
}
