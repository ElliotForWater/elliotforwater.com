import React from 'react'
import styles from './Map.module.css'

const Map = ({ searchQuery }) => {
  const srcValue = `https://www.google.com/maps?ie=UTF8&q=${searchQuery}&output=embed`

  return (
    <div className='container'>
      <iframe className={styles.map} scrolling='yes' src={srcValue} />
      <style jsx>{`
        .container {
          height: calc(70vw);
          padding: 0 25px;
        }
      `}
      </style>
    </div>
  )
}

export default Map
