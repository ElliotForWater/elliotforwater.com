import React from 'react'
import styles from './ImagesView.module.css'

type ImagesProp = {
  title: string
  imageUrl: string
  thumbnailUrl: string
  pixelUrl: string
}

interface Prop {
  images: ImagesProp[]
}

const ImagesView = ({ images }: Prop) => {
  return (
    <div className={styles.container}>
      {images.map((image, i) => (
        <div className={styles.item} key={i}>
          <a href={image.imageUrl} target='_self'>
            <img
              src={image.thumbnailUrl}
              alt={image.title}
              title={image.title}
              className={styles.image}
            />
          </a>
          <img className={styles.hidden} src={image.pixelUrl} />
        </div>
      ))}
    </div>
  )
}

export default ImagesView
