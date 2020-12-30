import React from 'react'
import styles from './RefineSearch.module.css'

type relatedObj = {
  text: string
  pixelUrl: string
}

interface Props {
  refineSearches: relatedObj[]
}

const RefineSearch = ({ refineSearches }: Props) => {
  return (
    <div className={styles.tabs}>
      {refineSearches &&
        refineSearches.map((item, i) => (
          <a key={i} className={styles.tab} href={`/search?query=${item.text}&type=web`}>
            {item.text}
          </a>
        ))}
    </div>
  )
}

export default RefineSearch
