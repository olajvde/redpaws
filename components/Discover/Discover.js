import React from 'react'
import {BsArrowDownCircle} from 'react-icons/bs'
import styles from './discover.module.css'



const Discover = () => {
  return (
    <div>
        <div className={styles.discover}>
        <BsArrowDownCircle color=' #1e1f1d'/> <span className={styles.text}>Discover More.</span>
      </div>
    </div>
  )
}

export default Discover