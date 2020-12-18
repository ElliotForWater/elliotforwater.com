import React from 'react'
import styles from './VideosView.module.css'

type VideosProp = {
  title: string
  publisher: string
  targetedUrl: string
  thumbnailUrl: string
  pixelUrl: string
}

interface Prop {
  videos: VideosProp[]
  query: string
}

const VideosView = ({ videos, query }: Prop) => {
  return (
    <>
      {!videos.length ? (
        <h3 className={styles.titleNoResults}>We are sorry but there are no results for "{query}"</h3>
      ) : (
        <div className={styles.container}>
          {videos.map((video, i) => (
            <div className={styles.item} key={i}>
              <div className={styles.box}>
                <a className={styles.link} href={video.targetedUrl} target='_self'>
                  <img className={styles.image} src={video.thumbnailUrl} alt={video.title} title={video.title} />
                  <div className={styles.caption}>
                    <div className={styles.title}>
                      <h5 className={styles.titleLink}>{video.title}</h5>
                    </div>
                    <div className={styles.subtitle}>{video.publisher}</div>
                  </div>
                </a>
              </div>
              <img className={styles.hidden} src={video.pixelUrl} />
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default VideosView
