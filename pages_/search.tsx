import React, { useEffect, useState, ReactElement } from 'react'
import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'
import dynamic from 'next/dynamic'
import Error from 'next/error'
import Layout from '../components/Layout/Layout'
import TabsMenu from '../components/TabsMenu/TabsMenu'
import Loader from '../components/Loader/Loader'
import LoadMore from '../components/LoadMore/LoadMore'

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

const initResults = {
  organicResults: null,
  sponsoredResults: null,
  relatedSearches: null,
  imageResults: null,
  videoResults: null,
  newsResults: null,
}

const maxResults = {
  web: { name: 'organicResults', maxPerReq: 10 },
  image: { name: 'imageResults', maxPerReq: 150 },
  video: { name: 'videoResults', maxPerReq: 50 },
  news: { name: 'newsResults', maxPerReq: 100 },
}

function Container ({ isLoading, component, resultsBatch, incrementResultsBatch, showLoadMore }) {
  console.log('conatiner', isLoading)
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
      </>
    )
  }
}

function SearchPage ({ query, type }) {
  const { t } = useTranslation()
  const router = useRouter()
  const [results, setResults] = useState<resultsProp>(initResults)
  const [activeTab, setActiveTab] = useState<tabProp>(initStateTab)
  const [isError, setIsError] = useState<{ status: number }>({ status: 200 })
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [resultsBatch, setResultsBatch] = useState<number>(0)
  const [showLoadMore, setShowLoadMore] = useState<boolean>(true)

  const tabMenu = [
    {
      id: 1,
      resultType: 'web',
      title: t('search:all'),
      content: (
        <Container
          isLoading={isLoading}
          resultsBatch={resultsBatch}
          incrementResultsBatch={handleSetResultBatch}
          showLoadMore={showLoadMore}
          component={<AllResultsView organicItems={results.organicResults?.items ?? []} sponsoredItems={results.sponsoredResults?.items ?? []} relatedSearches={results.relatedSearches?.items ?? []} images={results.imageResults?.items ?? []} searchQuery={query} batches={results.batches} />}
        />
      ),
    },
    {
      id: 2,
      resultType: 'image',
      title: t('search:images'),
      content: <Container isLoading={isLoading} resultsBatch={resultsBatch} incrementResultsBatch={handleSetResultBatch} showLoadMore={showLoadMore} component={<ImagesView images={results.imageResults?.items ?? []} query={query} />} />,
    },
    {
      id: 3,
      resultType: 'video',
      title: t('search:videos'),
      content: <Container isLoading={isLoading} resultsBatch={resultsBatch} incrementResultsBatch={handleSetResultBatch} showLoadMore={showLoadMore} component={<VideosView videos={results.videoResults?.items ?? []} query={query} />} />,
    },
    {
      id: 4,
      resultType: 'news',
      title: t('search:news'),
      content: <Container isLoading={isLoading} resultsBatch={resultsBatch} incrementResultsBatch={handleSetResultBatch} showLoadMore={showLoadMore} component={<NewsView news={results.newsResults?.items ?? []} query={query} />} />,
    },
    {
      id: 5,
      resultType: 'map',
      title: t('search:map'),
      content: <MapView searchQuery={query} />,
    },
  ]

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
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/searchresults/${type}?query=${query}`)

        if (res.ok) {
          const json = await res.json()
          setIsError({ status: 200 })
          setResults(json)
          setActiveTab(findTab())
          window.scrollTo(0, 0)
          handleShowLoadMore(json)
          // setIsLoading(false)
        } else {
          setIsError({ status: 400 })
          // setIsLoading(false)
        }
      } catch (err) {
        console.error('Error while fetching Search API:', err)
        setIsError({ status: 500 })
        // setIsLoading(false)
      }
      setIsLoading(false)
    }

    fetchData()
    setIsLoading(false)
  }, [query, type])

  useEffect(() => {
    if (resultsBatch === 0 || type === 'map') return

    const fetchData = async () => {
      setIsLoading(true)

      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/searchresults/${type}?query=${query}&page=${resultsBatch}`)

        if (res.ok) {
          const json = await res.json()
          setIsError({ status: 200 })
          handleShowLoadMore(json)

          switch (type) {
            case 'web':
              setResults((prevResults) => {
                const sponsoredMainline = json.sponsoredResults?.items?.filter((item) => item.placementHint === 'Mainline')
                const newResults = {
                  ...prevResults,
                  batches: {
                    [resultsBatch]: [...sponsoredMainline, ...json.organicResults?.items],
                  },
                }
                return newResults
              })
              break

            case 'image':
              setResults((prevResults) => {
                const newResults = {
                  ...prevResults,
                }
                newResults.imageResults.items = prevResults.imageResults.items.concat(json.imageResults?.items)
                return newResults
              })
              break

            case 'video':
              setResults((prevResults) => {
                const newResults = {
                  ...prevResults,
                }
                newResults.videoResults.items = prevResults.videoResults.items.concat(json.videoResults?.items)
                return newResults
              })
              break

            case 'news':
              setResults((prevResults) => {
                const newResults = {
                  ...prevResults,
                }
                newResults.newsResults.items = prevResults.newsResults.items.concat(json.newsResults?.items)
                return newResults
              })
              break

            default:
              return
          }
        } else {
          setIsError({ status: 400 })
        }
      } catch (err) {
        console.error('Error while fetching Search API:', err)
        setIsError({ status: 500 })
      }

      setIsLoading(false)
    }

    fetchData()
  }, [resultsBatch])

  function handleSetResultBatch (nextIndex) {
    setResultsBatch(nextIndex)
  }

  function handleShowLoadMore (newResults) {
    const typeResultName = maxResults[type].name
    const maxResultsPerReq = maxResults[type].maxPerReq

    if (newResults[typeResultName]?.items.length < maxResultsPerReq) {
      return setShowLoadMore(false)
    }
  }

  function handleSwitchTab (nextActiveTab) {
    router.push(`search?query=${query}&type=${nextActiveTab.resultType}`)
  }

  function findTab (newType?: string): tabProp {
    return tabMenu.find((tab) => (newType || type) === tab.resultType)
  }

  return (
    <Layout fluid pageTitle={t('search:pageTitle')} pageDescription={t('search:pageDescription')}>
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

          .content {
            min-height: 200px;
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

SearchPage.getInitialProps = ({ query }) => {
  return {
    query: query.query,
    type: query.type,
  }
}

export default SearchPage
