import React from 'react'
import styles from './RefineSearch.module.css'

interface Props {
  refineSearches: string[]
}

const RefineSearch = ({ refineSearches }: Props) => {
  return (
    <div className={styles.tabs}>
      {refineSearches &&
        refineSearches.map((item, i) => (
          <a key={i} className={styles.tab} href={`/search?q=${item}&amp;type=all`}>
            {item}
          </a>
        ))}
    </div>
  )
}

export default RefineSearch
