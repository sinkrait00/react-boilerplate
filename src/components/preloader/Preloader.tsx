import React from 'react'
import styles from './Preloader.module.scss'

function Preloader() {
  return (
    <div className={styles.lds_ring}>
      <div />
      <div />
      <div />
      <div />
    </div>
  )
}

export default Preloader
