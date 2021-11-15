import getBingApi from '../../../helpers/_httpExpress'
import { SEARCH_MAX_RESULTS } from '../../../appConfig'

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
    count: SEARCH_MAX_RESULTS[type],
    offset: pageIndex || 0,
  }

  const fullQuery = objectToStringParams(params)
  const results = await getBingApi(type, fullQuery, req.headers)
  console.log('Bing api call results:', results)
  res.json(results)
}
