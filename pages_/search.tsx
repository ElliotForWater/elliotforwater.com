import React, { useEffect, useState, ReactElement } from 'react'
import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'
import dynamic from 'next/dynamic'
import Error from 'next/error'
import Layout from '../components/Layout/Layout'
import TabsMenu from '../components/TabsMenu/TabsMenu'
import Loader from '../components/Loader/Loader'

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
  items: []
}
interface resultsProp {
  organicResults: null | itemsProp
  sponsoredResults: null | itemsProp
  relatedSearches: null | itemsProp
  imageResults: null | itemsProp
  videoResults: null | itemsProp
  newsResults: null | itemsProp
}

const initResults = {
  organicResults: null,
  sponsoredResults: null,
  relatedSearches: null,
  imageResults: null,
  videoResults: null,
  newsResults: null,
}

function Container ({ results, query, component }) {
  if (
    !results.organicResults &&
    !results.sponsoredResults &&
    !results.relatedSearches &&
    !results.imageResults &&
    !results.videoResults &&
    !results.newsResults
  ) {
    return <Loader />
  }

  if (results.organicResults.numResults === 0) {
    return (
      <h3 className='title'>
        {`We are sorry but there are no results for "${query}"`}
        <style jsx>{`
          .title {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 200px;
          }
        `}
        </style>
      </h3>
    )
  }

  return component
}
function SearchPage ({ query, type }) {
  const { t } = useTranslation()
  const router = useRouter()
  const [results, setResults] = useState<resultsProp>(initResults)
  const [activeTab, setActiveTab] = useState<tabProp>(initStateTab)
  const [isError, setIsError] = useState<boolean>(false)

  const tabMenu = [
    {
      id: 1,
      resultType: 'web',
      title: t('search:all'),
      content: (
        <Container
          results={results}
          query={query}
          component={
            <AllResultsView
              organicItems={results.organicResults !== null && results.organicResults.items}
              sponsoredItems={results.sponsoredResults !== null && results.sponsoredResults.items}
              relatedSearches={results.relatedSearches !== null && results.relatedSearches.items}
              images={results.imageResults !== null && results.imageResults.items}
              searchQuery={query}
            />
          }
        />
      ),
    },
    {
      id: 2,
      resultType: 'image',
      title: t('search:images'),
      content: (
        <Container
          results={results}
          query={query}
          component={
            <ImagesView images={results.imageResults !== null && results.imageResults.items} />
          }
        />
      ),
    },
    {
      id: 3,
      resultType: 'video',
      title: t('search:videos'),
      content: (
        <Container
          results={results}
          query={query}
          component={
            <VideosView videos={results.videoResults !== null && results.videoResults.items} />
          }
        />
      ),
    },
    {
      id: 4,
      resultType: 'news',
      title: t('search:news'),
      content: (
        <Container
          results={results}
          query={query}
          component={<NewsView news={results.newsResults !== null && results.newsResults.items} />}
        />
      ),
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
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/searchresults/${type}?query=${query}`,
        )
        if (res.ok) {
          const json = await res.json()

          setIsError(false)
          setResults(json)
          setActiveTab(findTab())
          window.scrollTo(0, 0)
        }
      } catch (err) {
        console.error('Error while fetching Search API:', err)
        setIsError(true)
      }
    }

    fetchData()
  }, [query, type])

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

        <div className='content'>{isError ? <Error statusCode={500} /> : activeTab.content}</div>
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
