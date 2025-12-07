import React from 'react'
import styles from './styles.module.scss'

export const Card = ({icon, title, text}) => {
  return (
    <div className={styles.card}>
        <div className={styles.card__icon} dangerouslySetInnerHTML={{ __html: icon }}></div>
        <h3 className={styles.card__title}>{title}</h3>
        <div>
            {text}
        </div>
    </div>
  )
}
