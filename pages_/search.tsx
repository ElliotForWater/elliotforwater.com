import React, { useEffect, useState, useContext } from 'react'
import Router, { useRouter } from 'next/router'
import { UserContext } from '../context/UserContext'
import useTranslation from 'next-translate/useTranslation'
import dynamic from 'next/dynamic'
import Error from 'next/error'
import Layout from '../components/Layout/Layout'
import TabsMenu from '../components/TabsMenu/TabsMenu'
import Loader from '../components/Loader/Loader'
import LoadMore from '../components/LoadMore/LoadMore'
import { formatNumber, queryNoWitheSpace } from '../helpers/_utils'
import { splitCookies, COOKIE_NAME_ADULT_FILTER } from '../helpers/_cookies'
import Cookies from 'js-cookie'

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

const MAX_RESULTS = {
  web: 10,
  image: 150,
  video: 50,
  news: 100,
}

const TAB_MENU = [
  {
    id: 1,
    resultType: 'web',
    title: 'search:all',
  },
  {
    id: 2,
    resultType: 'image',
    title: 'search:images',
  },
  {
    id: 3,
    resultType: 'video',
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
]

function findTabByType(type?: string): tabProp {
  return TAB_MENU.find((tab) => type === tab.resultType)
}

function SearchPage({
  query,
  type,
  errorCode,
  activeTab,
  organicTotResults,
  organicItems,
  sponsoredItems,
  imagesItems,
  videoItems,
  newsItems,
  relatedSearches,
}) {
  const { t } = useTranslation()
  const router = useRouter()
  const { userState } = useContext(UserContext)
  const [resultsBatch, setResultsBatch] = useState<number>(0)
  const [showLoadMore, setShowLoadMore] = useState<boolean>(false)
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [content, setContent] = useState(null)
  const queryNoWhite = queryNoWitheSpace(query)
  const [errorStatus, setStatusCode] = useState(errorCode)

  const [allResults, setAllResults] = useState({ organicItems, sponsoredItems, imagesItems, relatedSearches })
  const [images, setImages] = useState(imagesItems)
  const [videos, setVideos] = useState(videoItems)
  const [news, setNews] = useState(newsItems)

  useEffect(() => {
    switch (type) {
      case 'web':
        setAllResults({ organicItems, sponsoredItems, imagesItems, relatedSearches })
        break
      case 'image':
        setImages(imagesItems)
        break
      case 'video':
        setVideos(videoItems)
        break
      case 'news':
        setNews(newsItems)
        break
    }

    setStatusCode(errorStatus)
  }, [query, type, errorStatus])

  useEffect(() => {
    let content
    setIsLoading(true)
    switch (type) {
      case 'web':
        content = <AllResultsView results={allResults} searchQuery={query} />
        setIsLoading(false)
        allResults?.organicItems.length ? setShowLoadMore(true) : setShowLoadMore(false)
        break

      case 'image':
        content = <ImagesView images={images} query={query} />
        setIsLoading(false)
        images.length ? setShowLoadMore(true) : setShowLoadMore(false)
        break

      case 'video':
        content = <VideosView videos={videos} query={query} />
        setIsLoading(false)
        videos.length ? setShowLoadMore(true) : setShowLoadMore(false)
        break

      case 'news':
        content = <NewsView news={news} query={query} />
        setIsLoading(false)
        news.length ? setShowLoadMore(true) : setShowLoadMore(false)
        break

      case 'map':
        content = <MapView searchQuery={query} />
        setIsLoading(false)
        setShowLoadMore(false)
        break
    }

    setContent(content)
  }, [allResults, images, videos, news, type, query])

  useEffect(() => {
    if (resultsBatch === 0 || type === 'map') return

    const fetchData = async () => {
      try {
        setIsLoadingMore(true)

        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/searchresults/${type}?` +
            new URLSearchParams({
              query: `${queryNoWhite}`,
              page: `${resultsBatch}`,
              AdultContentFilter: `${userState.adultContentFilter}`,
            })
        )

        if (res.ok) {
          const json = await res.json()
          switch (type) {
            case 'web':
              setAllResults((prevResults: any) => {
                const sponsoredMainline = json.sponsoredResults?.items?.filter(
                  (item) => item.placementHint === 'Mainline'
                )
                const newResults = {
                  ...prevResults,
                  batches: {
                    [resultsBatch]: [...sponsoredMainline, ...json.organicResults?.items],
                  },
                }

                const last = newResults.batches && Object.keys(newResults.batches).pop()
                if (newResults.batches[last].length < MAX_RESULTS.web) {
                  setShowLoadMore(false)
                }

                return newResults
              })
              setIsLoadingMore(false)
              return

            case 'image':
              setImages((prevResults) => {
                const newResults = [...prevResults, ...json.imageResults?.items]

                if (newResults.length < MAX_RESULTS.image) {
                  setShowLoadMore(false)
                }
                return newResults
              })

              setIsLoadingMore(false)
              return

            case 'video':
              setVideos((prevResults) => {
                const newResults = [...prevResults, ...json.videoResults?.items]

                if (newResults.length < MAX_RESULTS.video) {
                  setShowLoadMore(false)
                }
                return newResults
              })

              setIsLoadingMore(false)
              return

            case 'news':
              setNews((prevResults) => {
                const newResults = [...prevResults, ...json.newsResults?.items]

                if (newResults.length < MAX_RESULTS.news) {
                  setShowLoadMore(false)
                }
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
    router.push(`search?query=${query}&type=${nextActiveTab.resultType}`)
  }

  return (
    <Layout fluid pageTitle={query + t('search:pageTitle')}>
      <section className='wrapper'>
        <div className='tabsWrapper'>
          <TabsMenu tabItems={TAB_MENU} activeTabId={activeTab.id} setActiveTab={handleSwitchTab} />
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

          {!isLoading && organicTotResults > 0 && (
            <div className='resultsTot'>
              <p>{t('search:tot_results', { tot_results: formatNumber(organicTotResults) })}</p>
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
            background: var(--containerBg);
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

          @media (min-width: 768px) {
            .tabsWrapper {
              padding-left: 125px;
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

type itemsProp = {
  items: any[]
  numResults?: number
}
interface resultsObj {
  organicResults: null | itemsProp
  sponsoredResults: null | itemsProp
  relatedSearches: null | itemsProp
  imageResults: null | itemsProp
  videoResults: null | itemsProp
  newsResults: null | itemsProp
}

// cannot use getServerSideProps yet: https://github.com/vercel/next.js/discussions/17269
SearchPage.getInitialProps = async ({ req, res, query }) => {
  const searchQuery = query.query
  const type = query.type
  let statusCode = req && req.errorCode
  if (!searchQuery || !type) {
    if (res) {
      res.writeHead(301, { Location: '/' })
      return res.end()
    } else {
      return Router.push('/')
    }
  }

  const queryNoWhite = queryNoWitheSpace(searchQuery)
  let results: resultsObj = null
  let activeTab = findTabByType(type)
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
  const cookies = req ? req.headers.cookie : Cookies.get(COOKIE_NAME_ADULT_FILTER)

  if (type === 'map') {
    activeTab = findTabByType('map')
  } else {
    try {
      const data = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/searchresults/${type}?` +
          new URLSearchParams({
            query: `${queryNoWhite}`,
            AdultContentFilter: splitCookies(cookies, COOKIE_NAME_ADULT_FILTER),
          }),
        {
          headers: {
            'Content-Type': 'application/json',
            'User-Agent': userAgent,
            'Access-Control-Allow-Headers': '*',
          },
        }
      )

      if (data.ok) {
        results = await data.json()
      } else {
        statusCode = 400
      }
    } catch (err) {
      console.error('Error while fetching Search API:', err)
    }
  }

  return {
    query: searchQuery,
    type,
    errorCode: statusCode !== 200 ? statusCode : null,
    organicTotResults: results?.organicResults?.numResults ?? null,
    organicItems: results?.organicResults?.items ?? [],
    sponsoredItems: results?.sponsoredResults?.items ?? [],
    imagesItems: results?.imageResults?.items ?? [],
    videoItems: results?.videoResults?.items ?? [],
    newsItems: results?.newsResults?.items ?? [],
    relatedSearches: results?.relatedSearches?.items ?? [],
    activeTab,
  }
}

export default SearchPage
