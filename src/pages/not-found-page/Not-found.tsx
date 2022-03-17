import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Not-found.module.scss'

function NotFoundPage() {
  return (
    <div className={styles.notFoundPage}>
      <div className={styles.notFoundPage__info}>
        <h1 className={styles.notFoundPage__title}>404</h1>
        <h2>Cтраница не найдена</h2>
        <p className={styles.notFoundPage__text}>
          Неправильно набран адрес, или такой страницы
          <br />
          не существует.
        </p>
        <Link to="/" className={styles.notFoundPage__link}>
          На главную
        </Link>
      </div>
    </div>
  )
}

export default NotFoundPage
