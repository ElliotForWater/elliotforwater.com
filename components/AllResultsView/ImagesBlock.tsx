import React from 'react'
import Link from 'next/link'
import styles from './AllResultsView.module.css'
import useTranslation from 'next-translate/useTranslation'

type image = {
  name: string
  contentUrl: string
  thumbnailUrl: string
}

type Prop = {
  images: image[]
  query: string
}

const ImagesBlock = ({ images, query }: Prop) => {
  const { t } = useTranslation()
  const firstBatch = images.slice(0, 3)

  return (
    <div className={styles.article}>
      <h6 className={styles.imagePreviewTitle}>{t('search:media_results')}</h6>
      <div className={styles.imagePreview}>
        {firstBatch.map((image, i) => (
          <div className={styles.imagePreviewContainer} key={i}>
            <a href={image.contentUrl} target='_blank'>
              <img className={styles.imagePreviewImage} src={image.thumbnailUrl} alt={image.title} />
            </a>
            {/* <img className={styles.hidden} src={image.pixelUrl} /> */}
          </div>
        ))}
      </div>
      <Link
        href={{
          pathname: '/search',
          query: { query, type: 'image' },
        }}
      >
        <a>
          {t('search:more_images')} {'>'}
        </a>
      </Link>
    </div>
  )
}

export default ImagesBlock
