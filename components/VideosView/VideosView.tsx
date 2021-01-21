import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import CustomLink from '../CustomLink'
import styles from './VideosView.module.css'

type VideosProp = {
  title: string
  publisher: string
  targetedUrl: string
  thumbnailUrl: string
  pixelUrl: string
}

interface ResultsProp {
  videos: VideosProp[]
  query: string
}

const VideosView = ({ videos, query }: ResultsProp) => {
  const { t } = useTranslation()
  return (
    <>
      {!videos.length ? (
        <h3 className={styles.titleNoResults}>{t('search:no_result_found_query', { query })}</h3>
      ) : (
        <div className={styles.container}>
          {videos.map((video, i) => (
            <div className={styles.item} key={i}>
              <div className={styles.box}>
                <CustomLink className={styles.link} href={video.targetedUrl}>
                  <img className={styles.image} src={video.thumbnailUrl} alt={video.title} title={video.title} />
                  <div className={styles.caption}>
                    <div className={styles.title}>
                      <h5 className={styles.titleLink}>{video.title}</h5>
                    </div>
                    <div className={styles.subtitle}>{video.publisher}</div>
                  </div>
                </CustomLink>
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
