import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import styles from './NewsView.module.css'
import classnames from 'classnames'

type NewsObj = {
  title: string
  targetedUrl: string
  thumbnailUrl: string
  provider: string
  description: string
  pixelUrl: string
}

interface Prop {
  newsResults: { items: NewsObj[] }
}

interface ResultsProp {
  results: Prop
  query: string
}

const NewsView = ({ results, query }: ResultsProp) => {
  const { t } = useTranslation()
  const news = results.newsResults.items

  return (
    <>
      {!news.length ? (
        <h3 className={styles.titleNoResults}>{t('search:no_result_found_query', { query })}</h3>
      ) : (
        <ul className={styles.articles}>
          {news.map((article, i) => (
            <li key={i}>
              <article className={styles.article}>
                <div className={styles.wrap}>
                  <div className={styles.container}>
                    <a href={article.targetedUrl} target='_self'>
                      <img
                        className={classnames(styles.image, {
                          [styles.placeholder]: !article.thumbnailUrl,
                        })}
                        src={article.thumbnailUrl || ''}
                        alt={article.thumbnailUrl ? article.title : ''}
                        title={article.title}
                      />
                    </a>
                  </div>
                  <div className={styles.container}>
                    <div className={styles.title}>
                      <a href={article.targetedUrl} target='_self'>
                        {article.title}
                      </a>
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
