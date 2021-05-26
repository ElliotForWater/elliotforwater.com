import styles from './Card.module.css'

interface PropCard {
  title: string
  text?: string
  image?: { url: string; title: string }
}

function Card({ image, title, text }: PropCard) {
  return (
    <div className={styles.container}>
      {image && (
        <div className={styles.imgWrapper}>
          <img className={styles.img} src={image.url} alt={image.title || title} />
        </div>
      )}
      <h3 className={title}>{title}</h3>
      <p className={text}>{text}</p>
    </div>
  )
}

export default Card
