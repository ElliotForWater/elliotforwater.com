const https = require('https')

function getBingApi(type, query) {
  if (!process.env.BING_SEARCH_KEY) {
    throw new Error('BING_SEARCH_KEY is not set.')
  }

  const isWebSearch = type === 'web'
  const path = isWebSearch ? '/v7.0/search?' : `/v7.0/${type}/search?`

  const options = {
    hostname: 'api.bing.microsoft.com',
    path: path + query,
    headers: { 'Ocp-Apim-Subscription-Key': process.env.BING_SEARCH_KEY },
  }

  return new Promise((resolve, reject) => {
    https.get(options, (res) => {
      let body = ''
      res.on('data', (part) => (body += part))
      res.on('end', () => {
        for (const header in res.headers) {
          if (header.startsWith('bingapis-') || header.startsWith('x-msedge-')) {
            console.log(header + ': ' + res.headers[header])
          }
        }
        resolve(JSON.parse(body))
      })
      res.on('error', (e) => {
        console.log('Error: ' + e.message)
        throw e
      })
    })
  })
}

export default getBingApi
