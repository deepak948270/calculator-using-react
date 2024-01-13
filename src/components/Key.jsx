import React from 'react'
import styles from "../styles/key.module.css"

const Key = ({button,onButtonClick}) => {
  return (
    <div>
        <button className={styles.keyButton} onClick={()=>onButtonClick(button)}>{button}</button>

    </div>
  )
}

export default Key;