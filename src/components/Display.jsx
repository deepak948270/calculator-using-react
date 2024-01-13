import React from 'react'
import styles from '../styles/Display.module.css'

const Display = ({dispalyCalValue}) => {
  return (
    <div>
        <input className={styles.display} type="text"  value={dispalyCalValue} readOnly placeholder='enter values for operation'/>
    </div>
  )
}

export default Display