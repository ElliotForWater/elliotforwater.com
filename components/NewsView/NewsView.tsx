import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import CustomLink from '../CustomLink'
import styles from './NewsView.module.css'
import classnames from 'classnames'

type NewsObj = {
  provider: string
  datePublished: string
  description: string
  targetedUrl: string
  title: string
  thumbnailUrl: string
  placementHint: string
  pixelUrl: string
  thumbnailHeight: number
  thumbnailWidth: number
  rank: number
}
interface ResultsProp {
  news: NewsObj[]
  query: string
}

const NewsView = ({ news, query }: ResultsProp) => {
  const { t } = useTranslation()

  return (
    <>
      {!news || !news.length ? (
        <h3 className={styles.titleNoResults}>{t('search:no_result_found_query', { query })}</h3>
      ) : (
        <ul className={styles.articles}>
          {news.map((article, i) => (
            <li key={i}>
              <article className={styles.article}>
                <div className={styles.wrap}>
                  <div className={styles.container}>
                    <CustomLink href={article.targetedUrl}>
                      <img
                        className={classnames(styles.image, {
                          [styles.placeholder]: !article.thumbnailUrl,
                        })}
                        src={article.thumbnailUrl || ''}
                        alt={article.thumbnailUrl ? article.title : ''}
                        title={article.title}
                      />
                    </CustomLink>
                  </div>
                  <div className={styles.container}>
                    <div className={styles.title}>
                      <CustomLink href={article.targetedUrl}>{article.title}</CustomLink>
                    </div>
                    <div className={styles.subtitle}>{article.provider}</div>
                    <p className={styles.description}>{article.description}</p>
                  </div>
                  <img className={styles.hidden} src={article.pixelUrl} />
                </div>
              </article>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

export default NewsView
