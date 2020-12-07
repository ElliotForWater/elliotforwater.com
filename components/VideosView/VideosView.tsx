import React from 'react'
import styles from './VideosView.module.css'

type VideosProp = {
  link: string
  src: string
  title: string
  subtitle: string
}

interface Prop {
  videos: VideosProp[]
  searchQuery: string
}

const VideosView = ({ videos, searchQuery }: Prop) => {
  return (
    <div className={styles.container}>
      {videos.map((video, i) => (
        <div className={styles.item} key={i}>
          <div className={styles.box}>
            <a className={styles.link} href={video.link} target='_self'>
              <img className={styles.image} src={video.src} alt={video.title} title={video.title} />
              <div className={styles.caption}>
                <div className={styles.title}>
                  <h5 className={styles.titleLink}>{video.title}</h5>
                </div>
                <div className={styles.subtitle}>{video.subtitle}</div>
              </div>
            </a>
          </div>
          <img
            className={styles.hidden}
            src={`https://feed.cf-se.com/v2/pixel/?gd=SY1002408&amp;uid=&amp;sid=&amp;q=${searchQuery}&amp;searchProvider=2&amp;searchSource=80&amp;searchTagId=ptvl!%3D!tracingTag%253DC24%2526tracingTag%253Dus-east-1%2526tracingTag%253Dg1!%26!ptnvls!%3D!%257B%257D!%26!ptvls!%3D!%257B%2522C%2522%253A%252224%2522%257D&amp;original=&amp;linktype=Image&amp;referrer=&amp;agent=&amp;page=0&amp;mkt=&amp;c=24&amp;d=&amp;td=&amp;n=&amp;r=&amp;af=1&amp;at=images&amp;AdUnitId=11715086&amp;AdUnitName=cf_elliot4w_media1&amp;tid=1f347847-288c-4789-ba73-dde214c4ed73&amp;adPosition=150&amp;isid=&amp;ab_isSticky=&amp;ab_startDate=&amp;ab_endDate=&amp;ab_per=&amp;nu=&amp;ptv=2&amp;resultType=organic`}
          />
        </div>
      ))}
    </div>
  )
}

export default VideosView
