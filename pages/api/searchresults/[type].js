import getBingApi from '../../../helpers/_httpExpress'

function objectToStringParams(params) {
  const qs = Object.keys(params)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    .join('&')

  return qs
}

export default async function handler(req, res) {
  const { type, query, adultContentFilter, pageIndex } = req.query

  const params = {
    q: query,
    safeSearch: adultContentFilter,
  }
  switch (type) {
    case 'web':
      params.count = 10
      params.offset = pageIndex || 0
      break
    case 'images':
      params.count = 150
      params.offset = pageIndex || 0
      break
    case 'videos':
      params.count = 150
      params.offset = pageIndex || 0
      break
    case 'news':
      params.count = 20
      params.offset = pageIndex || 0
      break
  }
  const fullQuery = objectToStringParams(params)

  const results = await getBingApi(type, fullQuery, req.headers)
  res.json(results)
}
