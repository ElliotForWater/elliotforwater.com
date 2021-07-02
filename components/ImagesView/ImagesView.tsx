import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import CustomLink from '../CustomLink'
import styles from './ImagesView.module.css'

type ImagesProp = {
  name: string
  contentUrl: string
  thumbnailUrl: string
}
interface ResultsProp {
  images: ImagesProp[]
  query: string
}

const ImagesView = ({ images, query }: ResultsProp) => {
  const { t } = useTranslation()

  if (!Array.isArray(images)) {
    return <></>
  }

  return (
    <>
      {!images ? (
        <h3 className={styles.titleNoResults}>{t('search:no_result_found_query', { query })}</h3>
      ) : (
        <div className={styles.container}>
          {images.map((image, i) => (
            <div className={styles.item} key={i}>
              <CustomLink href={image.contentUrl}>
                <img src={image.thumbnailUrl} alt={image.name} title={image.name} className={styles.image} />
              </CustomLink>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default ImagesView
