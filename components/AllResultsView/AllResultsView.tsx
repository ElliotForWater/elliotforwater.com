import React from 'react'
import styles from './AllResultsView.module.css'

type relatesObj = {
  url: string
  title: string
}

type ItemsObj = {
  url: string
  title: string
  subtitle: string
  description: string
  sponsor: boolean
  relates: relatesObj[]
}

interface Prop {
  items: ItemsObj[]
  searchQuery: string
}

const NewsView = ({ items, searchQuery }: Prop) => {
  return (
    <div>
      {items.map((item, i) => {
        const relates = item.relates
        return (
          <article className={styles.article} key={i}>
            <h3 className={styles.title}>
              <a className={styles.titleLink} href={item.url}>
                {item.title}
              </a>
            </h3>
            <div className={styles.subtitle}>
              {item.sponsor && <span className={styles.sponsorLabel}>Ad</span>}
              {item.subtitle}
            </div>
            <p>{item.description}</p>
            <div>
              {relates.map((link, i) => (
                <span key={i}>
                  <a className={styles.relatedLink} href={link.url}>
                    {link.title}
                  </a>
                  {i === relates.length - 1 ? '' : <span> - </span>}
                </span>
              ))}
            </div>
            <img
              className={styles.hidden}
              src={`https://feed.cf-se.com/v2/pixel/?gd=SY1002408&amp;uid=&amp;sid=&amp;q=${searchQuery}&amp;searchProvider=2&amp;searchSource=80&amp;searchTagId=ptvl!%3D!tracingTag%253DC24%2526tracingTag%253Dus-east-1%2526tracingTag%253Dg1!%26!ptnvls!%3D!%257B%257D!%26!ptvls!%3D!%257B%2522C%2522%253A%252224%2522%257D&amp;original=&amp;linktype=Image&amp;referrer=&amp;agent=&amp;page=0&amp;mkt=&amp;c=24&amp;d=&amp;td=&amp;n=&amp;r=&amp;af=1&amp;at=images&amp;AdUnitId=11715086&amp;AdUnitName=cf_elliot4w_media1&amp;tid=1f347847-288c-4789-ba73-dde214c4ed73&amp;adPosition=150&amp;isid=&amp;ab_isSticky=&amp;ab_startDate=&amp;ab_endDate=&amp;ab_per=&amp;nu=&amp;ptv=2&amp;resultType=organic`}
            />
          </article>
        )
      })}
    </div>
  )
}

export default NewsView
