import React, { useContext } from 'react'
import classnames from 'classnames'
import useTranslation from 'next-translate/useTranslation'
import { UserContext } from '../../context/UserContext'
import styles from './RefineSearch.module.css'

type relatedObj = {
  text: string
  pixelUrl: string
}

interface Props {
  refineSearches: relatedObj[]
}

const RefineSearch = ({ refineSearches }: Props) => {
  const { t } = useTranslation()
  const { userState, setNextUserState } = useContext(UserContext)

  return (
    <>
      <div className={styles.mobile}>
        <article className={styles.article}>
          <div>
            <h6 className={styles.title}>{t('search:refine_search')}</h6>

            <div className={styles.tabs}>
              {refineSearches &&
                refineSearches.map((item, i) => (
                  <a
                    key={i}
                    className={styles.tab}
                    href={`/search?query=${item.text}&type=web`}
                    onClick={() => {
                      setNextUserState({ numOfSearches: Number(userState.numOfSearches) + 1 })
                    }}
                  >
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
            <a
              key={i}
              className={styles.tab}
              href={`/search?query=${item.text}&type=web`}
              onClick={() => {
                setNextUserState({ numOfSearches: Number(userState.numOfSearches) + 1 })
              }}
            >
              {item.text}
            </a>
          ))}
      </div>
    </>
  )
}

export default RefineSearch
