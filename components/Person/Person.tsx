import styles from './Person.module.css'
import classnames from 'classnames'

interface PersonProp {
  name?: string
  profilePic: { url: string; title: string }
  shortDescription?: string
  longDescription?: string
  size?: 'big' | 'small'
}

const Person = ({ profilePic, name, shortDescription, longDescription, size }: PersonProp) => {
  return (
    <div className={classnames(styles.container, { [styles[size]]: size })}>
      <img src={profilePic.url} alt={profilePic.title} className={styles.pic} />
      <span>
        {name && <p className={styles.name}>{name}</p>}
        {shortDescription && <p className={styles.shortDescription}>{shortDescription}</p>}
        {longDescription && <p className={styles.longDescription}>{longDescription}</p>}
      </span>
    </div>
  )
}

export default Person
