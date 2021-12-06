import React, { useEffect, useState, useContext } from 'react'
import Router, { useRouter } from 'next/router'
import requestIp from 'request-ip'
import { UserContext } from '../context/UserContext'
import useTranslation from 'next-translate/useTranslation'
import dynamic from 'next/dynamic'
import Error from 'next/error'
import { Helmet } from 'react-helmet'
import Layout from '../components/Layout/Layout'
import TabsMenu from '../components/TabsMenu/TabsMenu'
import Loader from '../components/Loader/Loader'
import LoadMore from '../components/LoadMore/LoadMore'
import { formatNumber, queryNoWhiteSpace, getClientIp } from '../helpers/_utils'
import { COOKIE_NAME_ADULT_FILTER, getCookie, convertAdultFilter } from '../helpers/_cookies'
import { FiMoreVertical } from 'react-icons/fi'
import { FaWikipediaW, FaYoutube, FaTwitch } from 'react-icons/fa'
import GmailIcon from '../components/Icons/GmailIcon'
import AmazonIcon from '../components/Icons/AmazonIcon'
import { SEARCH_MAX_RESULTS } from '../appConfig'

const AllResultsView = dynamic(() => import('../components/AllResultsView/AllResultsView'), {
  loading: () => <Loader />,
})
const ImagesView = dynamic(() => import('../components/ImagesView/ImagesView'), {
  loading: () => <Loader />,
})
const VideosView = dynamic(() => import('../components/VideosView/VideosView'), {
  loading: () => <Loader />,
})
const NewsView = dynamic(() => import('../components/NewsView/NewsView'), {
  loading: () => <Loader />,
})
const MapView = dynamic(() => import('../components/Map/Map'), { loading: () => <Loader /> })

interface tabProp {
  id: number
  resultType: string
  title: string
}

const TAB_MENU = [
  {
    id: 1,
    resultType: 'web',
    title: 'search:all',
  },
  {
    id: 2,
    resultType: 'images',
    title: 'search:images',
  },
  {
    id: 3,
    resultType: 'videos',
    title: 'search:videos',
  },
  {
    id: 4,
    resultType: 'news',
    title: 'search:news',
  },
  {
    id: 5,
    resultType: 'map',
    title: 'search:map',
  },
  {
    id: 6,
    resultType: 'external',
    title: 'Google',
    externalLink: 'https://google.com/search?q=',
  },
  {
    id: 7,
    resultType: 'dropdown',
    title: 'More',
    icon: <FiMoreVertical />,
    links: [
      {
        id: 'wikipedia',
        label: 'Wikipedia',
        link: 'https://en.wikipedia.org/wiki/',
        icon: <FaWikipediaW />,
      },
      {
        id: 'amazon',
        label: 'Amazon',
        link: 'https://www.amazon.com/s?k=',
        icon: <AmazonIcon size={20} />,
      },
      {
        id: 'youtube',
        label: 'Youtube',
        link: 'https://www.youtube.com/results?search_query=',
        icon: <FaYoutube />,
      },
      {
        id: 'twitch',
        label: 'Twitch',
        link: 'https://www.twitch.tv/search?term=',
        icon: <FaTwitch />,
      },
      {
        id: 'gmail',
        label: 'Gmail',
        link: 'https://mail.google.com/mail/u/0/#search/',
        icon: <GmailIcon size={20} />,
      },
    ],
  },
]

function findTabByType(type?: string): tabProp {
  return TAB_MENU.find((tab) => type === tab.resultType)
}

function SearchPage({ query, type, errorCode, activeTab, totResults, results }) {
  const { t } = useTranslation()
  const router = useRouter()
  const { userState } = useContext(UserContext)
  const [resultsBatch, setResultsBatch] = useState<number>(0)
  const [showLoadMore, setShowLoadMore] = useState<boolean>(false)
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [content, setContent] = useState(null)
  const queryNoWhite = queryNoWhiteSpace(query)
  const [errorStatus, setStatusCode] = useState(errorCode)

  const [allResults, setAllResults] = useState(results)

  console.log({ errorCode })
  console.log({ errorStatus })

  useEffect(() => {
    setAllResults(results)
    // setStatusCode(errorStatus)
  }, [query, type, errorStatus])

  useEffect(() => {
    let updatedContent
    setIsLoading(true)

    if (type === 'map') {
      updatedContent = <MapView searchQuery={query} />
      setContent(updatedContent)
      setIsLoading(false)
      return
    }

    switch (type) {
      case 'web':
        updatedContent = <AllResultsView results={allResults} query={query} />
        setIsLoading(false)
        break

      case 'images':
        updatedContent = <ImagesView images={allResults} query={query} />
        setIsLoading(false)
        break

      case 'videos':
        updatedContent = <VideosView videos={allResults} query={query} />
        setIsLoading(false)
        break

      case 'news':
        updatedContent = <NewsView news={allResults} query={query} />
        setIsLoading(false)
        break
    }

    // loadmore button
    const totRemainResults = totResults - SEARCH_MAX_RESULTS[type] * resultsBatch
    const noResults = type === 'web' ? !allResults?.web : allResults?.length === 0
    if (noResults || totRemainResults < SEARCH_MAX_RESULTS[type]) {
      setShowLoadMore(false)
    } else {
      setShowLoadMore(true)
    }

    setContent(updatedContent)
  }, [allResults, type, query])

  useEffect(() => {
    if (resultsBatch === 0 || type === 'map') return

    const fetchData = async () => {
      try {
        setIsLoadingMore(true)

        const res = await fetch(
          `${window.location.origin}/api/searchresults/${type}?` +
            new URLSearchParams({
              query: `${queryNoWhite}`,
              pageIndex: `${resultsBatch}`,
              adultContentFilter: `${userState.adultContentFilter}`,
            }),
          {
            headers: {
              'Content-Type': 'application/json',
              'User-Agent': navigator.userAgent,
              'X-MSEdge-ClientIP': await getClientIp(),
            },
          }
        )

        if (res.ok) {
          const result = await res.json()
          switch (type) {
            case 'web':
              setAllResults((prevResults: any) => {
                const newResults = {
                  ...prevResults,
                  batches: {
                    [resultsBatch]: [...result.webPages?.value],
                  },
                }
                return newResults
              })
              setIsLoadingMore(false)
              return

            case 'images':
              setAllResults((prevResults) => {
                const newResults = [...prevResults, ...result.value]
                return newResults
              })

              setIsLoadingMore(false)
              return

            case 'videos':
              setAllResults((prevResults) => {
                const newResults = [...prevResults, ...result.value]
                return newResults
              })
              setIsLoadingMore(false)
              return

            case 'news':
              setAllResults((prevResults) => {
                const newResults = [...prevResults, ...result.value]
                return newResults
              })
              setIsLoadingMore(false)
              return
          }
        } else {
          setStatusCode(400)
        }
      } catch (err) {
        console.error('Error while fetching Search API:', err)
        setStatusCode(500)
      }
    }
    fetchData()
  }, [resultsBatch])

  function handleSetResultBatch(nextIndex) {
    setResultsBatch(nextIndex)
  }

  function handleSwitchTab(nextActiveTab) {
    if (nextActiveTab.resultType === 'external') {
      return window.open(`${nextActiveTab.externalLink}${query}`, '_blank')
    }
    router.push(`search?query=${query}&type=${nextActiveTab.resultType}`)
  }

  return (
    <Layout fluid pageTitle={`${query} ` + t('search:pageTitle')} pageDescription={t('search:pageDescription')}>
      <Helmet>
        <meta name='robots' content='noindex, nofollow' />
      </Helmet>
      <section className='wrapper'>
        <div className='tabsWrapper'>
          <TabsMenu tabItems={TAB_MENU} activeTabId={activeTab.id} setActiveTab={handleSwitchTab} query={query} />
        </div>

        <div className='content'>
          {isLoading && <Loader />}
          {errorStatus && <Error statusCode={errorStatus} />}

          {!errorStatus && !isLoading && content}

          {!isLoading && showLoadMore && (
            <div className='loadmoreContainer'>
              {!isLoadingMore ? (
                <LoadMore currIndex={resultsBatch} incrementIndex={handleSetResultBatch} />
              ) : (
                <Loader />
              )}
            </div>
          )}

          {!isLoading && totResults > 0 && (
            <div className='resultsTot'>
              <p>{t('search:tot_results', { tot_results: formatNumber(totResults) })}</p>
              <p>
                <a href='https://privacy.microsoft.com/privacystatement' target='_blank'>
                  {t('search:microsoft_result')}
                </a>
              </p>
            </div>
          )}
        </div>
      </section>
      <style jsx>
        {`
          .tabsWrapper {
            border-bottom: 1px solid var(--lighterGrey);
            width: 100%;
            padding-left: 20px;
            margin-top: 10px;
          }

          .wrapper {
            display: grid;
            grid-template-rows: auto 1fr auto;
            grid-template-columns: 100%;
          }

          .content {
            padding: 10px 2px;
            background: var(--lightGreyBackground);
            margin-top: 1px;
          }

          .resultsTot {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            margin: 20px 0;
          }

          .resultsTot p {
            margin-bottom: 10px;
          }

          .resultsTot a {
            color: var(--dimGrey);
          }

          .loadmoreContainer {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 20px 0;
          }

          .errorContainer {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            justify-content: center;
            height: 100%;
          }

          .errorContainer h2 {
            font-weight: normal;
            padding-bottom: 20px;
            font-size: 1.5em;
          }

          .errorContainer h2 span {
            font-size: 1.4em;
            color: #b0aeae;
          }

          .errorContainer p {
            font-size: 1.2em;
          }

          @media (min-width: 768px) {
            .tabsWrapper {
              margin-top: 15px;
              padding-left: 147px;
            }

            .content {
              background: white;
              padding: 15px 20px;
            }

            .resultsTot {
              margin: 40px 0;
            }

            .loadmoreContainer {
              margin: 40px 0;
            }
          }
        `}
      </style>
    </Layout>
  )
}
interface resultsObj {
  value: null | any[]
  relatedSearches: null | { value: any[] }
  totalEstimatedMatches: null | number
  webPages: null | { totalEstimatedMatches: number; value: any[] }
  images: null | { value: any[] }
  videos: null | { value: any[] }
  news: null | { value: any[] }
}

SearchPage.getInitialProps = async ({ req, res, query, pathname }) => {
  const isDev = process.env.IS_DEV
  let searchQuery = query.query
  let type = query.type
  let isWeb
  let statusCode = res ? res.statusCode : null
  let results: resultsObj = null
  let activeTab = findTabByType(type)
  let userAgent
  let adultContentCookie
  let fullUrl
  const queryNoWhite = queryNoWhiteSpace(searchQuery)
  const oldQuery = query.q
  const isMap = type === 'map'

  // fix for legacy query parameters
  if (oldQuery) {
    searchQuery = oldQuery
    type = 'web'
    if (res) {
      res.writeHead(301, { Location: `/search?query=${searchQuery}&type=${type}` })
      return res.end()
    } else {
      return history.pushState('', '', `/search?query=${searchQuery}&type=${type}`)
    }
  }

  // if url doesn't have query or type param
  if (!searchQuery || !type) {
    if (res) {
      res.writeHead(301, { Location: '/' })
      return res.end()
    } else {
      return Router.push('/')
    }
  }

  // define userAgent and adultContentFilter based on client or server req
  if (req) {
    userAgent = req.headers['user-agent']
    adultContentCookie =
      req.cookies[COOKIE_NAME_ADULT_FILTER] === undefined
        ? 'Moderate'
        : convertAdultFilter(req.cookies[COOKIE_NAME_ADULT_FILTER])
    fullUrl = isDev ? process.env.NEXT_PUBLIC_BASE_URL : `https://${req.headers.host}`
  } else {
    userAgent = navigator.userAgent
    adultContentCookie =
      getCookie(COOKIE_NAME_ADULT_FILTER) === undefined ? 'Moderate' : getCookie(COOKIE_NAME_ADULT_FILTER)
    fullUrl = window.location.origin
  }

  // if is map, we return less data
  if (isMap) {
    activeTab = findTabByType('map')

    return {
      query: searchQuery,
      type,
      errorCode: statusCode !== 200 ? statusCode : null,
      activeTab,
      results: {},
    }
  }

  try {
    const data = await fetch(
      `${fullUrl}/api/searchresults/${type}?` +
        new URLSearchParams({
          query: `${queryNoWhite}`,
          adultContentFilter: adultContentCookie,
        }),
      {
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': userAgent,
          'X-MSEdge-ClientIP': req ? requestIp.getClientIp(req) : await getClientIp(),
        },
      }
    )
    console.log('searchpage server data', data)

    if (data.ok) {
      results = await data.json()
      const resultTypeAPI = '_type'
      isWeb = results[resultTypeAPI] === 'SearchResponse'
    } else {
      console.log('400 error')
      statusCode = 400
    }
  } catch (err) {
    statusCode = 500 // TODO: change it in API res
    console.log('500 error')
    console.error('Error! fetching Search API:', err)
  }

  return {
    query: searchQuery,
    type,
    errorCode: statusCode !== 200 && statusCode,
    totResults: results ? (isWeb ? results.webPages?.totalEstimatedMatches : results.totalEstimatedMatches) : null,
    results: results
      ? isWeb
        ? {
            web: results.webPages?.value,
            images: results.images?.value,
            video: results.videos?.value,
            news: results.news?.value,
            relatedSearches: results.relatedSearches?.value,
          }
        : results.value
      : null,
    activeTab,
  }
}

export default SearchPage
