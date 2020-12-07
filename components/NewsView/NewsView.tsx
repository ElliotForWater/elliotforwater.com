import React from 'react'
import styles from './NewsView.module.css'

type imageObj = {
  url: string
  title: string
}

type NewsObj = {
  url: string
  title: string
  subtitle: string
  description: string
  image: imageObj
}

interface Prop {
  news: NewsObj[]
  searchQuery: string
}

const NewsView = ({ news, searchQuery }: Prop) => {
  return (
    <ul>
      {news.map((article, i) => (
        <li key={i}>
          <article className={styles.article}>
            <div className={styles.wrap}>
              <div className={styles.container}>
                <a href={article.url} target='_self'>
                  <img
                    className={styles.image}
                    src={article.image.url}
                    alt={article.image.title}
                    title={article.image.title}
                  />
                </a>
              </div>
              <div className={styles.container}>
                <div className={styles.title}>
                  <a href={article.url} target='_self'>
                    {article.title}
                  </a>
                </div>
                <div className={styles.subtitle}>{article.subtitle}</div>
                <p className={styles.description}>{article.description}</p>
              </div>
              <img
                className={styles.hidden}
                src={`https://feed.cf-se.com/v2/pixel/?gd=SY1002408&amp;uid=&amp;sid=&amp;q=${searchQuery}&amp;searchProvider=2&amp;searchSource=80&amp;searchTagId=ptvl!%3D!tracingTag%253DC24%2526tracingTag%253Dus-east-1%2526tracingTag%253Dg1!%26!ptnvls!%3D!%257B%257D!%26!ptvls!%3D!%257B%2522C%2522%253A%252224%2522%257D&amp;original=&amp;linktype=Image&amp;referrer=&amp;agent=&amp;page=0&amp;mkt=&amp;c=24&amp;d=&amp;td=&amp;n=&amp;r=&amp;af=1&amp;at=images&amp;AdUnitId=11715086&amp;AdUnitName=cf_elliot4w_media1&amp;tid=1f347847-288c-4789-ba73-dde214c4ed73&amp;adPosition=150&amp;isid=&amp;ab_isSticky=&amp;ab_startDate=&amp;ab_endDate=&amp;ab_per=&amp;nu=&amp;ptv=2&amp;resultType=organic`}
              />
            </div>
          </article>
        </li>
      ))}
    </ul>
  )
}

export default NewsView
