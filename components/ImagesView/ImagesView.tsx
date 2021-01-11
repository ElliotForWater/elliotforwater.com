import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import CustomLink from '../CustomLink'
import styles from './ImagesView.module.css'

type ImagesProp = {
  title: string
  imageUrl: string
  thumbnailUrl: string
  pixelUrl: string
}

interface Prop {
  imageResults: { items: ImagesProp[] }
}

interface ResultsProp {
  results: Prop
  query: string
}

const ImagesView = ({ results, query }: ResultsProp) => {
  const { t } = useTranslation()
  if (!results) return <></>

  const images = results.imageResults.items

  return (
    <>
      {!images.length ? (
        <h3 className={styles.titleNoResults}>{t('search:no_result_found_query', { query })}</h3>
      ) : (
        <div className={styles.container}>
          {images.map((image, i) => (
            <div className={styles.item} key={i}>
              <CustomLink href={image.imageUrl}>
                <img src={image.thumbnailUrl} alt={image.title} title={image.title} className={styles.image} />
              </CustomLink>
              <img className={styles.hidden} src={image.pixelUrl} />
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default ImagesView
