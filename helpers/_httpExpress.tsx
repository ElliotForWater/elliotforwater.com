const https = require('https')

function getBingApi(type, query, headers) {
  if (!process.env.BING_SEARCH_KEY) {
    throw new Error('BING_SEARCH_KEY is not set.')
  }

  const isWebSearch = type === 'web'
  const path = isWebSearch ? '/v7.0/search?' : `/v7.0/${type}/search?`
  const clientid = headers['x-msedge-clientip']
  const userAgent = headers['user-agent']

  console.log({ clientid })
  const options = {
    hostname: 'api.bing.microsoft.com',
    path: path + query,
    headers: {
      'Ocp-Apim-Subscription-Key': process.env.BING_SEARCH_KEY,
    },
  }
  if (clientid) {
    headers['X-MSEdge-ClientID'] = clientid
  }
  if (userAgent) {
    headers['user-agent'] = userAgent
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
