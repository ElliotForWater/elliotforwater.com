import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import CustomLink from '../CustomLink'
import styles from './NewsView.module.css'
import classnames from 'classnames'

type NewsObj = {
  provider: { name: string }
  description: string
  url: string
  name: string
  image: { thumbnail: { contentUrl: string } }
}
interface ResultsProp {
  news: NewsObj[]
  query: string
}

const NewsView = ({ news, query }: ResultsProp) => {
  const { t } = useTranslation()

  if (!Array.isArray(news)) {
    return <></>
  }
  return (
    <>
      {!news ? (
        <h3 className={styles.titleNoResults}>{t('search:no_result_found_query', { query })}</h3>
      ) : (
        <ul className={styles.articles}>
          {news.map((article, i) => {
            return (
              <li key={i}>
                <article className={styles.article}>
                  <div className={styles.wrap}>
                    <div className={styles.container}>
                      <CustomLink href={article.url}>
                        <img
                          className={classnames(styles.image, {
                            [styles.placeholder]: !article.image,
                          })}
                          src={article.image?.thumbnail.contentUrl || ''}
                          alt={article.image ? article.name : ''}
                          title={article.name}
                        />
                      </CustomLink>
                    </div>
                    <div className={styles.container}>
                      <div className={styles.title}>
                        <CustomLink href={article.url}>{article.name}</CustomLink>
                      </div>
                      {article.provider && <div className={styles.subtitle}>{article.provider[0].name}</div>}
                      <p className={styles.description}>{article.description}</p>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      )}
    </>
  )
}

export default NewsView
