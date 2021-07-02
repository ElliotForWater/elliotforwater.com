import React, { useEffect, useState } from 'react'
import Router, { useRouter } from 'next/router'
import requestIp from 'request-ip'
// import { UserContext } from '../context/UserContext'
import useTranslation from 'next-translate/useTranslation'
import dynamic from 'next/dynamic'
// import Error from 'next/error'
import Layout from '../components/Layout/Layout'
import TabsMenu from '../components/TabsMenu/TabsMenu'
import Loader from '../components/Loader/Loader'
// import LoadMore from '../components/LoadMore/LoadMore'
import { formatNumber, queryNoWitheSpace, getClientIp } from '../helpers/_utils'
import { COOKIE_NAME_ADULT_FILTER, getCookie } from '../helpers/_cookies'
import { FiMoreVertical } from 'react-icons/fi'
import { FaWikipediaW, FaYoutube, FaTwitch } from 'react-icons/fa'
import GmailIcon from '../components/Icons/GmailIcon'
import AmazonIcon from '../components/Icons/AmazonIcon'

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

// const MAX_RESULTS = {
//   web: 10,
//   image: 150,
//   video: 50,
//   news: 100,
// }

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
  // const { userState } = useContext(UserContext)
  // const [resultsBatch, setResultsBatch] = useState<number>(0)
  // const [showLoadMore, setShowLoadMore] = useState<boolean>(false)
  // const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [content, setContent] = useState(null)
  // const queryNoWhite = queryNoWitheSpace(query)
  const [errorStatus, setStatusCode] = useState(errorCode)

  const [allResults, setAllResults] = useState(results)

  useEffect(() => {
    setAllResults(results)
    setStatusCode(errorStatus)
  }, [query, type, errorStatus])

  useEffect(() => {
    let content
    setIsLoading(true)
    switch (type) {
      case 'web':
        content = <AllResultsView results={allResults} query={query} />
        setIsLoading(false)
        // allResults?.organicItems.length ? setShowLoadMore(true) : setShowLoadMore(false)
        break

      case 'images':
        content = <ImagesView images={allResults} query={query} />
        setIsLoading(false)
        // images.length ? setShowLoadMore(true) : setShowLoadMore(false)
        break

      case 'videos':
        content = <VideosView videos={allResults} query={query} />
        setIsLoading(false)
        // videos.length ? setShowLoadMore(true) : setShowLoadMore(false)
        break

      case 'news':
        content = <NewsView news={allResults} query={query} />
        setIsLoading(false)
        // news.length ? setShowLoadMore(true) : setShowLoadMore(false)
        break

      case 'map':
        content = <MapView searchQuery={query} />
        setIsLoading(false)
        // setShowLoadMore(false)
        break
    }

    setContent(content)
  }, [allResults, type, query])

  // useEffect(() => {
  //   if (resultsBatch === 0 || type === 'map') return

  //   const fetchData = async () => {
  //     try {
  //       setIsLoadingMore(true)

  //       const res = await fetch(
  //         `${process.env.NEXT_PUBLIC_BASE_URL}/api/searchresults/${type}?` +
  //           new URLSearchParams({
  //             query: `${queryNoWhite}`,
  //             pageIndex: `${resultsBatch}`,
  //             adultContentFilter: `${userState.adultContentFilter}`,
  //           })
  //       )

  //       if (res.ok) {
  //         const json = await res.json()
  //         switch (type) {
  //           case 'web':
  //             setAllResults((prevResults: any) => {
  //               const sponsoredMainline = json.sponsoredResults?.items?.filter(
  //                 (item) => item.placementHint === 'Mainline'
  //               )
  //               const newResults = {
  //                 ...prevResults,
  //                 batches: {
  //                   [resultsBatch]: [...sponsoredMainline, ...json.organicResults?.items],
  //                 },
  //               }

  //               const last = newResults.batches && Object.keys(newResults.batches).pop()
  //               if (newResults.batches[last].length < MAX_RESULTS.web) {
  //                 setShowLoadMore(false)
  //               }

  //               return newResults
  //             })
  //             setIsLoadingMore(false)
  //             return

  //           case 'image':
  //             setImages((prevResults) => {
  //               const newResults = [...prevResults, ...json.imageResults?.items]

  //               if (newResults.length < MAX_RESULTS.image) {
  //                 setShowLoadMore(false)
  //               }
  //               return newResults
  //             })

  //             setIsLoadingMore(false)
  //             return

  //           case 'video':
  //             setVideos((prevResults) => {
  //               const newResults = [...prevResults, ...json.videoResults?.items]

  //               if (newResults.length < MAX_RESULTS.video) {
  //                 setShowLoadMore(false)
  //               }
  //               return newResults
  //             })

  //             setIsLoadingMore(false)
  //             return

  //           case 'news':
  //             setNews((prevResults) => {
  //               const newResults = [...prevResults, ...json.newsResults?.items]

  //               if (newResults.length < MAX_RESULTS.news) {
  //                 setShowLoadMore(false)
  //               }
  //               return newResults
  //             })

  //             setIsLoadingMore(false)
  //             return
  //         }
  //       } else {
  //         setStatusCode(400)
  //       }
  //     } catch (err) {
  //       console.error('Error while fetching Search API:', err)
  //       setStatusCode(500)
  //     }
  //   }

  //   fetchData()
  // }, [resultsBatch])

  // function handleSetResultBatch(nextIndex) {
  //   setResultsBatch(nextIndex)
  // }

  function handleSwitchTab(nextActiveTab) {
    if (nextActiveTab.resultType === 'external') {
      return window.open(`${nextActiveTab.externalLink}${query}`, '_blank')
    }

    router.push(`search?query=${query}&type=${nextActiveTab.resultType}`)
  }

  return (
    <Layout fluid pageTitle={`${query} ` + t('search:pageTitle')} pageDescription={t('search:pageDescription')}>
      <section className='wrapper'>
        <div className='tabsWrapper'>
          <TabsMenu tabItems={TAB_MENU} activeTabId={activeTab.id} setActiveTab={handleSwitchTab} query={query} />
        </div>

        <div className='content'>
          {isLoading && <Loader />}
          {errorStatus && (
            <div className='errorContainer'>
              <h2>
                {errorStatus} <span>|</span> {errorStatus === 400 ? 'Bad Request' : 'Server Error'}
              </h2>
              <p>
                We are sorry, we have a temporary issue. Please{' '}
                <a href={`https://google.com/search?q=${query}`}>click here</a> to see your results on Google!
              </p>
            </div>
          )}

          {!errorStatus && !isLoading && content}

          {/* {!isLoading && showLoadMore && (
            <div className='loadmoreContainer'>
              {!isLoadingMore ? (
                <LoadMore currIndex={resultsBatch} incrementIndex={handleSetResultBatch} />
              ) : (
                <Loader />
              )}
            </div>
          )} */}

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

SearchPage.getInitialProps = async ({ req, res, query }) => {
  let searchQuery = query.query
  let type = query.type
  let isWeb
  let statusCode = res ? res.statusCode : null
  let results: resultsObj = null
  let activeTab = findTabByType(type)
  let userAgent
  let adultContentCookie
  const queryNoWhite = queryNoWitheSpace(searchQuery)
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
    adultContentCookie = req.cookies[COOKIE_NAME_ADULT_FILTER] ? 'Moderate' : req.cookies[COOKIE_NAME_ADULT_FILTER]
  } else {
    userAgent = navigator.userAgent
    adultContentCookie =
      getCookie(COOKIE_NAME_ADULT_FILTER) === undefined ? 'Moderate' : getCookie(COOKIE_NAME_ADULT_FILTER)
  }

  // if is map, we return less data
  if (isMap) {
    activeTab = findTabByType('map')

    return {
      query: searchQuery,
      type,
      errorCode: statusCode !== 200 ? statusCode : null,
      activeTab,
      results: null,
    }
  }

  try {
    const data = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/searchresults/${type}?` +
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

    if (data.ok) {
      results = await data.json()
      isWeb = results._type === 'SearchResponse'
    } else {
      statusCode = 400
    }
  } catch (err) {
    statusCode = 500 // TODO: change it in API res
    console.error('Error! fetching Search API:', err)
  }

  return {
    query: searchQuery,
    type,
    errorCode: statusCode !== 200 ? statusCode : null,
    totResults: isWeb ? results.webPages.totalEstimatedMatches : results.totalEstimatedMatches,
    results: isWeb
      ? {
          web: results.webPages.value,
          images: results.images?.value,
          video: results.videos?.value,
          news: results.news?.value,
          relatedSearches: results.relatedSearches?.value,
        }
      : results.value,
    activeTab,
  }
}

export default SearchPage
