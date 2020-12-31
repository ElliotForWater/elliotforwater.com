import React from 'react'
import classnames from 'classnames'
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
    <>
      <div className={styles.mobile}>
        <article className={styles.article}>
          <div>
            <h6 className={styles.title}> Refine your search:</h6>

            <div className={styles.tabs}>
              {refineSearches &&
                refineSearches.map((item, i) => (
                  <a key={i} className={styles.tab} href={`/search?query=${item.text}&type=web`}>
                    {item.text}
                  </a>
                ))}
            </div>
          </div>
        </article>
      </div>

      <div className={classnames(styles.tabs, styles.desktop)}>
        {refineSearches &&
          refineSearches.map((item, i) => (
            <a key={i} className={styles.tab} href={`/search?query=${item.text}&type=web`}>
              {item.text}
            </a>
          ))}
      </div>
    </>
  )
}

export default RefineSearch
