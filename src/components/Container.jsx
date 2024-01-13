import React from 'react'
import styles from '../styles/Container.module.css'

const Container = (prop) => {
  return (
    <div className={styles.calciContainer}>
      {prop.children}
    </div>
  )
}

export default Container