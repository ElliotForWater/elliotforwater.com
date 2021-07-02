const https = require('https')

function getBingApi(type, query, headers) {
  if (!process.env.BING_SEARCH_KEY) {
    throw new Error('BING_SEARCH_KEY is not set.')
  }

  const isWebSearch = type === 'web'
  const path = isWebSearch ? '/v7.0/search?' : `/v7.0/${type}/search?`

  const options = {
    hostname: 'api.bing.microsoft.com',
    path: path + query,
    headers: {
      'user-agent': headers['user-agent'],
      'x-msedge-clientip': headers['x-msedge-clientip'],
      'Ocp-Apim-Subscription-Key': process.env.BING_SEARCH_KEY,
    },
  }

  return new Promise((resolve, reject) => {
    https.get(options, (res) => {
      let body = ''
      res.on('data', (part) => (body += part))
      res.on('end', () => {
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
