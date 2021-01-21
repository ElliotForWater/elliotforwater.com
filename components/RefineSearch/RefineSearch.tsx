import React, { useContext } from 'react'
import { useRouter } from 'next/router'
import classnames from 'classnames'
import useTranslation from 'next-translate/useTranslation'
import { UserContext } from '../../context/UserContext'
import styles from './RefineSearch.module.css'
import { queryNoWitheSpace } from '../../helpers/_utils'

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
  const router = useRouter()

  function handleClick(e, text) {
    e.preventDefault()
    const queryNoWhite = queryNoWitheSpace(text)

    setNextUserState({ numOfSearches: Number(userState.numOfSearches) + 1 })
    router.push(`search?query=${queryNoWhite}&type=web`)
  }

  return (
    <>
      <div className={styles.mobile}>
        <article className={styles.article}>
          <div>
            <h6 className={styles.title}>{t('search:refine_search')}</h6>

            <div className={styles.tabs}>
              {refineSearches &&
                refineSearches.map((item, i) => {
                  return (
                    <a key={i} className={styles.tab} onClick={(e) => handleClick(e, item.text)}>
                      {item.text}
                    </a>
                  )
                })}
            </div>
          </div>
        </article>
      </div>

      <div className={classnames(styles.tabs, styles.desktop)}>
        {refineSearches &&
          refineSearches.map((item, i) => (
            <a key={i} className={styles.tab} onClick={(e) => handleClick(e, item.text)}>
              {item.text}
            </a>
          ))}
      </div>
    </>
  )
}

export default RefineSearch
