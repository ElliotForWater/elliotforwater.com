import React from 'react'
import styles from './AllResultsView.module.css'
// import useTranslation from 'next-translate/useTranslation'
import CustomLink from '../CustomLink'

// type siteLinksProp = {
//   url: string
//   text: string
// }

type articleItemsProp = {
  url: string
  name: string
  displayUrl: string
  snippet: string
}

const ArticleLink = ({ url, name, displayUrl, snippet }: articleItemsProp) => {
  // const { t } = useTranslation()

  return (
    <article className={styles.article}>
      <div className={styles.sponsor}>
        {/* {siteLinks !== undefined && <span className={styles.sponsorLabel}>{t('search:sponsor_by')} ·</span>} */}
        {displayUrl}
      </div>
      <h3 className={styles.title}>
        <CustomLink className={styles.titleLink} href={url}>
          {name}
        </CustomLink>
      </h3>
      <p>{snippet}</p>
      {/* <div className={styles.relatedLinksWrap}>
        {siteLinks &&
          siteLinks.map((link, i) => (
            <span key={i}>
              <CustomLink className={styles.relatedLink} href={`search?query=${link.text}&type=web`}>
                {link.text}
              </CustomLink>
              {i === siteLinks.length - 1 ? '' : <span> - </span>}
            </span>
          ))}
      </div>
      */}
    </article>
  )
}

export default ArticleLink
