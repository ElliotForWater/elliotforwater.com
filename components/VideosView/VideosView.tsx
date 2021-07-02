import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import CustomLink from '../CustomLink'
import styles from './VideosView.module.css'

type VideosProp = {
  name: string
  creator: { name: string }
  contentUrl: string
  thumbnailUrl: string
}

interface ResultsProp {
  videos: VideosProp[]
  query: string
}

const VideosView = ({ videos, query }: ResultsProp) => {
  const { t } = useTranslation()

  if (!Array.isArray(videos)) {
    return <></>
  }
  return (
    <>
      {!videos ? (
        <h3 className={styles.titleNoResults}>{t('search:no_result_found_query', { query })}</h3>
      ) : (
        <div className={styles.container}>
          {videos.map((video, i) => {
            return (
              <div className={styles.item} key={i}>
                <div className={styles.box}>
                  <CustomLink className={styles.link} href={video.contentUrl}>
                    <img className={styles.image} src={video.thumbnailUrl} alt={video.name} title={video.name} />
                    <div className={styles.caption}>
                      <div className={styles.title}>
                        <h5 className={styles.titleLink}>{video.name}</h5>
                      </div>
                      <div className={styles.subtitle}>{video.creator?.name}</div>
                    </div>
                  </CustomLink>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </>
  )
}

export default VideosView
