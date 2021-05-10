import styles from './Card.module.css'

interface PropCard {
  title: string
  text?: string
  imageUrl?: string
  imageAlt?: string
}

function Card({ imageUrl, imageAlt, title, text }: PropCard) {
  return (
    <div className={styles.container}>
      {imageUrl && <img src={imageUrl} alt={imageAlt || title} />}
      <h3 className={title}>{title}</h3>
      <p className={text}>{text}</p>
    </div>
  )
}

export default Card
