import React from 'react'
import styles from './Map.module.css'

const Map = ({ searchQuery }) => {
  const srcValue = `https://www.google.com/maps?ie=UTF8&q=${searchQuery}&output=embed`

  return <iframe className={styles.map} scrolling='yes' src={srcValue} />
}

export default Map
