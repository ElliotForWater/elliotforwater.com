import React, { useState, useEffect } from 'react'
import RefineSearch from '../RefineSearch/RefineSearch'
import ImagesBlock from './ImagesBlock'
import Article from './Article'
import styles from './AllResultsView.module.css'

type relatedLinks = {
  text: string
  pixelUrl: string
}

type siteLinks = {
  url: string
  text: string
  pixelUrl: string
}

type image = {
  title: string
  targetedUrl: string
  thumbnailUrl: string
  pixelUrl: string
}

type sponsoredItemsObj = {
  targetedUrl: string
  title: string
  displayUrl: string
  description: string
  pixelUrl: string
  siteLinks: siteLinks[]
  placementHint: string
}

type organicItemsObj = {
  targetedUrl: string
  title: string
  displayUrl: string
  description: string
  pixelUrl: string
}
interface Prop {
  organicItems: organicItemsObj[]
  sponsoredItems: sponsoredItemsObj[]
  relatedSearches: relatedLinks[]
  images: image[]
  searchQuery: string
  batches?: { [x: number]: any[] }
}
const AllResultsView = ({ organicItems, sponsoredItems, relatedSearches, images, searchQuery, batches }: Prop) => {
  const mainlineSponsor = []
  const sidebarSponsor = []
  if (sponsoredItems.length) {
    mainlineSponsor.push(...sponsoredItems.filter((item) => item.placementHint === 'Mainline'))
    sidebarSponsor.push(...sponsoredItems.filter((item) => item.placementHint === 'Sidebar'))
  }
  const firstBatchOrganic = !organicItems.length ? [] : organicItems.slice(0, 3)
  const secondBatchOrganic = !organicItems.length ? [] : organicItems.slice(3, organicItems.length)
  const combinedResults = [...mainlineSponsor, ...firstBatchOrganic, images, ...secondBatchOrganic]
  const [moreResults, setMoreResults] = useState<sponsoredItemsObj[]>([])

  useEffect(() => {
    for (const key in batches) {
      setMoreResults((prev) => [...prev, ...batches[key]])
    }
  }, [batches])

  return (
    <>
      {!sponsoredItems?.length ? (
        <h3 className={styles.titleNoResults}>We are sorry but there are no results for "{searchQuery}"</h3>
      ) : (
        <div className={styles.gridContainer}>
          <div className={styles.header}>
            <RefineSearch refineSearches={relatedSearches} />
          </div>
          <div className={styles.main}>
            {combinedResults.map((item: image[] | sponsoredItemsObj, i) => {
              if (Array.isArray(item)) {
                if (item.length === 0) return
                return <ImagesBlock images={item} key={i} searchQuery={searchQuery} />
              } else {
                return <Article key={i} targetedUrl={item.targetedUrl} title={item.title} displayUrl={item.displayUrl} description={item.description} pixelUrl={item.pixelUrl} siteLinks={item.siteLinks} />
              }
            })}

            {moreResults.length && moreResults.map((item, i) => <Article key={i} targetedUrl={item.targetedUrl} title={item.title} displayUrl={item.displayUrl} description={item.description} pixelUrl={item.pixelUrl} siteLinks={item.siteLinks} />)}
          </div>

          <div className={styles.sidebar}>
            {sidebarSponsor.map((item: sponsoredItemsObj, i) => (
              <Article key={i} targetedUrl={item.targetedUrl} title={item.title} displayUrl={item.displayUrl} description={item.description} pixelUrl={item.pixelUrl} siteLinks={item.siteLinks} />
            ))}
          </div>
        </div>
      )}
    </>
  )
}

export default AllResultsView
