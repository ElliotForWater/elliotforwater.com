import React, { useEffect, useState, useContext, ReactElement } from 'react'
import { useRouter } from 'next/router'
import { UserContext } from '../context/UserContext'
import useTranslation from 'next-translate/useTranslation'
import dynamic from 'next/dynamic'
import Error from 'next/error'
import Layout from '../components/Layout/Layout'
import TabsMenu from '../components/TabsMenu/TabsMenu'
import Loader from '../components/Loader/Loader'
import LoadMore from '../components/LoadMore/LoadMore'
import { formatNumber } from '../helpers/_utils'

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
  content: ReactElement
}

const initStateTab = {
  id: null,
  resultType: '',
  title: '',
  content: null,
}

type itemsProp = {
  items: any[]
  numResults?: number
}

type batchesProp = {
  [x: number]: any[]
}
interface resultsProp {
  organicResults: null | itemsProp
  sponsoredResults: null | itemsProp
  relatedSearches: null | itemsProp
  imageResults: null | itemsProp
  videoResults: null | itemsProp
  newsResults: null | itemsProp
  batches?: batchesProp
}

interface ContainerProps {
  isLoading: boolean
  component: ReactElement
  resultsBatch: number
  incrementResultsBatch: (nextIndex: any) => void
  showLoadMore: boolean
  numResults?: number
}

const MAX_RESULTS = {
  web: { name: 'organicResults', maxPerReq: 10 },
  image: { name: 'imageResults', maxPerReq: 150 },
  video: { name: 'videoResults', maxPerReq: 50 },
  news: { name: 'newsResults', maxPerReq: 100 },
}

const TAB_MENU = [
  {
    id: 1,
    resultType: 'web',
    title: 'search:all',
    content: null,
  },
  {
    id: 2,
    resultType: 'image',
    title: 'search:images',
    content: null,
  },
  {
    id: 3,
    resultType: 'video',
    title: 'search:videos',
    content: null,
  },
  {
    id: 4,
    resultType: 'news',
    title: 'search:news',
    content: null,
  },
  {
    id: 5,
    resultType: 'map',
    title: 'search:map',
    content: null,
  },
]

function Container({ isLoading, component, resultsBatch, incrementResultsBatch, showLoadMore, numResults }: ContainerProps) {
  const { t } = useTranslation()

  if (isLoading) {
    return <Loader />
  } else {
    return (
      <>
        {component}
        {showLoadMore && (
          <div className='loadmoreContainer'>
            <LoadMore currIndex={resultsBatch} incrementIndex={incrementResultsBatch} />
            <style jsx>
              {`
                .loadmoreContainer {
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  margin: 20px 0;
                }

                @media (min-width: 768px) {
                  .loadmoreContainer {
                    margin: 40px 0;
                  }
                }
              `}
            </style>
          </div>
        )}
        {numResults !== undefined && numResults > 0 && (
          <div className='resultsTot'>
            <p>{t('search:tot_results', { tot_results: formatNumber(numResults) })}</p>
            <p>
              <a href='https://privacy.microsoft.com/privacystatement' target='_blank'>
                {t('search:microsoft_result')}
              </a>
            </p>
            <style jsx>
              {`
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

                @media (min-width: 768px) {
                  .resultsTot {
                    margin: 40px 0;
                  }
                }
              `}
            </style>
          </div>
        )}
      </>
    )
  }
}

function SearchPage({ query, type }) {
  const { t } = useTranslation()
  const router = useRouter()
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  const [userContext, setUserContext] = useContext(UserContext)
  const [results, setResults] = useState<resultsProp>(null)
  const [activeTab, setActiveTab] = useState<tabProp>(initStateTab)
  const [isError, setIsError] = useState<{ status: number }>({ status: 200 })
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [resultsBatch, setResultsBatch] = useState<number>(0)
  const [showLoadMore, setShowLoadMore] = useState<boolean>(false)
  const [tabMenu, setTabMenu] = useState(TAB_MENU)

  console.log({ userContext })

  useEffect(() => {
    setTabMenu((prev) => {
      const newTabs = [...prev]
      newTabs.map((tab) => {
        switch (tab.resultType) {
          case 'web':
            return (tab.content = <Container isLoading={isLoading} resultsBatch={resultsBatch} incrementResultsBatch={handleSetResultBatch} showLoadMore={showLoadMore} numResults={results?.organicResults?.numResults} component={<AllResultsView results={results} searchQuery={query} />} />)
          case 'image':
            return (tab.content = <Container isLoading={isLoading} resultsBatch={resultsBatch} incrementResultsBatch={handleSetResultBatch} showLoadMore={showLoadMore} component={<ImagesView results={results} query={query} />} />)
          case 'video':
            return (tab.content = <Container isLoading={isLoading} resultsBatch={resultsBatch} incrementResultsBatch={handleSetResultBatch} showLoadMore={showLoadMore} component={<VideosView results={results} query={query} />} />)
          case 'news':
            return (tab.content = <Container isLoading={isLoading} resultsBatch={resultsBatch} incrementResultsBatch={handleSetResultBatch} showLoadMore={showLoadMore} component={<NewsView results={results} query={query} />} />)
          case 'map':
            return (tab.content = <MapView searchQuery={query} />)
        }
      })

      return newTabs
    })
  }, [isLoading, showLoadMore])

  useEffect(() => {
    setActiveTab(findTab())
  }, [results])

  useEffect(() => {
    if (type === 'map') {
      return setActiveTab(findTab())
    }

    const fetchData = async () => {
      try {
        setIsLoading(true)
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/searchresults/${type}?query=${query}&` +
            new URLSearchParams({
              AdultContentFilter: userContext.adultContentFilter,
            })
        )

        console.log('r', res)

        if (res.ok) {
          const json = await res.json()
          setIsError({ status: 200 })

          setResults((prev) => {
            if (prev && prev.batches) {
              const newResults = {
                ...json,
                batches: {},
              }

              return newResults
            } else {
              return json
            }
          })

          setActiveTab(findTab())
          window.scrollTo(0, 0)
          handleShowLoadMore(json)

          setIsLoading(false)
        } else {
          setIsError({ status: 400 })
          setIsLoading(false)
        }
      } catch (err) {
        console.error('Error while fetching Search API:', err)
        setIsError({ status: 500 })
        setIsLoading(false)
      }
    }

    fetchData()
  }, [query, type])

  useEffect(() => {
    if (resultsBatch === 0 || type === 'map') return

    const fetchData = async () => {
      // TODO: Proper Batch Loading state - load just new batch, not whole container

      try {
        setShowLoadMore(false)
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/searchresults/${type}?query=${query}&page=${resultsBatch}`)

        if (res.ok) {
          const json = await res.json()
          setIsError({ status: 200 })

          switch (type) {
            case 'web':
              return setResults((prevResults) => {
                const sponsoredMainline = json.sponsoredResults?.items?.filter((item) => item.placementHint === 'Mainline')
                const newResults = {
                  ...prevResults,
                  batches: {
                    [resultsBatch]: [...sponsoredMainline, ...json.organicResults?.items],
                  },
                }
                handleShowLoadMore(newResults)
                return newResults
              })

            case 'image':
              return setResults((prevResults) => {
                const newResults = {
                  ...prevResults,
                }
                newResults.imageResults.items = prevResults.imageResults.items.concat(json.imageResults?.items)

                handleShowLoadMore(newResults)
                return newResults
              })

            case 'video':
              return setResults((prevResults) => {
                const newResults = {
                  ...prevResults,
                }
                newResults.videoResults.items = prevResults.videoResults.items.concat(json.videoResults?.items)
                handleShowLoadMore(newResults)
                return newResults
              })

            case 'news':
              return setResults((prevResults) => {
                const newResults = {
                  ...prevResults,
                }
                newResults.newsResults.items = prevResults.newsResults.items.concat(json.newsResults?.items)
                handleShowLoadMore(newResults)
                return newResults
              })
          }
        } else {
          setIsError({ status: 400 })
        }
      } catch (err) {
        console.error('Error while fetching Search API:', err)
        setIsError({ status: 500 })
      }
    }

    fetchData()
  }, [resultsBatch])

  function handleShowLoadMore(newResults) {
    const typeResultName = MAX_RESULTS[type].name
    const maxResultsPerReq = MAX_RESULTS[type].maxPerReq

    if (type === 'web') {
      // no results for 'query'
      if (!newResults.organicResults.items.length) {
        return setShowLoadMore(false)
      }

      // first render with results
      if (!newResults.batches) {
        return setShowLoadMore(true)
      }

      // no more results available
      const last = newResults.batches && Object.keys(newResults.batches).pop()
      if (newResults.batches[last].length < maxResultsPerReq) {
        return setShowLoadMore(false)
      }
    }

    if (!newResults[typeResultName]?.items.length || newResults[typeResultName]?.items.length < maxResultsPerReq) {
      return setShowLoadMore(false)
    }

    setShowLoadMore(true)
  }

  function handleSetResultBatch(nextIndex) {
    setResultsBatch(nextIndex)
  }

  function handleSwitchTab(nextActiveTab) {
    router.push(`search?query=${query}&type=${nextActiveTab.resultType}`)
  }

  function findTab(newType?: string): tabProp {
    return tabMenu.find((tab) => (newType || type) === tab.resultType)
  }

  return (
    <Layout fluid pageTitle={query + t('search:pageTitle')} pageDescription={t('search:pageDescription')}>
      <section className='wrapper'>
        <div className='tabsWrapper'>
          <TabsMenu tabItems={tabMenu} activeTabId={activeTab.id} setActiveTab={handleSwitchTab} />
        </div>

        <div className='content'>{isError.status !== 200 ? <Error statusCode={isError.status} /> : activeTab.content}</div>
      </section>
      <style jsx>
        {`
          .tabsWrapper {
            border-bottom: 1px solid var(--lighterGrey);
            width: 100%;
            padding-left: 10%;
            margin-top: 10px;
          }

          .wrapper {
            min-height: 100%;
            display: grid;
            grid-template-rows: auto 1fr auto;
            grid-template-columns: 100%;
          }

          .content {
            min-height: 100%;
            padding: 10px 2px;
            background: var(--containerBg);
            margin-top: 1px;
          }

          @media (min-width: 768px) {
            .tabsWrapper {
              padding-left: 125px;
            }

            .content {
              background: white;
              padding: 15px 20px;
            }
          }
        `}
      </style>
    </Layout>
  )
}

export async function getServerSideProps({ query }) {
  return {
    props: {
      query: query.query,
      type: query.type,
    },
  }
}

export default SearchPage
