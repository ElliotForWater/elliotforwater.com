import React from 'react'
import styles from './Toast.module.css'

const Toast = (props) => {
  const { title, message, backgroundColor, icon, onDelete } = props

  return (
    <div
      className={`${styles.notification} ${styles.toast}`}
      style={{ backgroundColor: backgroundColor }}
    >
      <button type='button' className={styles.notificationButton} onClick={() => onDelete()}>
        X
      </button>
      <div className={styles.notificationImageWrapper}>
        <img className={styles.notificationImage} src={icon} alt={title} />
      </div>
      <div>
        <p className={styles.notificationTitle}>{title}</p>
        <p className={styles.notificationMessage}>{message}</p>
      </div>
    </div>
  )
}
export default Toast
