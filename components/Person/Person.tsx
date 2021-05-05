import styles from './Person.module.css'
import classnames from 'classnames'
import { FiLinkedin, FiInstagram, FiTwitter, FiLink } from 'react-icons/fi'

interface PersonProp {
  name?: string
  profilePic: { url: string; title: string }
  shortDescription?: string
  longDescription?: string
  size?: 'big' | 'small'
  socialLinks?: any
}

const SOCIAL_ICONS = {
  instagram: <FiInstagram />,
  linkedin: <FiLinkedin />,
  twitter: <FiTwitter />,
  personal: <FiLink />,
}

const Person = ({ profilePic, name, shortDescription, longDescription, size, socialLinks }: PersonProp) => {
  return (
    <div className={classnames(styles.container, { [styles[size]]: size })}>
      <img src={profilePic.url} alt={profilePic.title} className={styles.pic} />
      <span>
        {name && <p className={styles.name}>{name}</p>}
        {shortDescription && <p className={styles.shortDescription}>{shortDescription}</p>}
        {longDescription && <p className={styles.longDescription}>{longDescription}</p>}
        {socialLinks && (
          <div>
            {socialLinks.map((socialLink) => (
              <a className={styles.socialIcons} href={socialLink.link} target='_blank' key={socialLink.name}>
                {SOCIAL_ICONS[socialLink.name]}
              </a>
            ))}
          </div>
        )}
      </span>
    </div>
  )
}

export default Person
