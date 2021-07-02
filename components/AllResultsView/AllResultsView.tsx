import React, { useState, useEffect } from 'react'
import useTranslation from 'next-translate/useTranslation'
import RefineSearch from '../RefineSearch/RefineSearch'
import ImagesBlock from './ImagesBlock'
import Article from './Article'
import styles from './AllResultsView.module.css'

type relatedLinks = {
  text: string
  displayText: string
}

type image = {
  name: string
  contentUrl: string
  thumbnailUrl: string
}

type organicItemsObj = {
  url: string
  name: string
  displayUrl: string
  snippet: string
}
interface Prop {
  web: organicItemsObj[]
  relatedSearches?: relatedLinks[]
  images?: image[]
  videos?: image[]
  news?: image[]
  batches?: { [x: number]: any[] }
}

interface ResultsProp {
  results: Prop
  query: string
}

const AllResultsView = ({ results, query }: ResultsProp) => {
  const { t } = useTranslation()
  const [moreResults, setMoreResults] = useState<organicItemsObj[]>([])

  useEffect(() => {
    if (results && results.batches && Object.keys(results.batches).length) {
      for (const key in batches) {
        setMoreResults((prev) => [...prev, ...batches[key]])
      }
    } else {
      setMoreResults([])
    }
  }, [results])

  if (!results?.web) {
    return <></>
  }

  const { web, relatedSearches, images, batches } = results
  const firstBatchOrganic = !web.length ? [] : web.slice(0, 3)
  const secondBatchOrganic = !web.length ? [] : web.slice(3, web.length)
  const combinedResults = [...firstBatchOrganic, images, ...secondBatchOrganic]
  return (
    <>
      {!web?.length ? (
        <h3 className={styles.titleNoResults}>{t('search:no_result_found_query', { query })}</h3>
      ) : (
        <div className={styles.gridContainer}>
          {relatedSearches && (
            <div className={styles.refineSearchesWrap}>
              <RefineSearch refineSearches={relatedSearches} />
            </div>
          )}
          <div className={styles.main}>
            {combinedResults &&
              combinedResults.map((item: image[] | organicItemsObj, i) => {
                if (Array.isArray(item)) {
                  if (item.length === 0) return
                  return <ImagesBlock images={item} key={i} query={query} />
                } else {
                  if (!item) return
                  return (
                    <Article
                      key={i}
                      url={item.url}
                      name={item.name}
                      displayUrl={item.displayUrl}
                      snippet={item.snippet}
                    />
                  )
                }
              })}

            {relatedSearches && (
              <div className={styles.refineSearchesMobile}>
                <RefineSearch refineSearches={relatedSearches} />
              </div>
            )}

            {moreResults.length !== 0 &&
              moreResults.map((item, i) => (
                <Article key={i} url={item.url} name={item.name} displayUrl={item.displayUrl} snippet={item.snippet} />
              ))}
          </div>

          {/* <div className={styles.sidebar}>
            {sidebarSponsor &&
              sidebarSponsor.map((item: sponsoredItemsObj, i) => (
                <Article
                  key={i}
                  targetedUrl={item.targetedUrl}
                  title={item.title}
                  displayUrl={item.displayUrl}
                  description={item.description}
                  pixelUrl={item.pixelUrl}
                  siteLinks={item.siteLinks}
                />
              ))}
          </div> */}
        </div>
      )}
    </>
  )
}

export default AllResultsView
