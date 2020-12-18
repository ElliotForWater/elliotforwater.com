import React from 'react'
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
  news: NewsObj[]
}

const NewsView = ({ news }: Prop) => {
  return (
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
                    alt={article.title}
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
  )
}

export default NewsView
