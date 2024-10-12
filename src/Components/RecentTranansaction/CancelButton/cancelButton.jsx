import React from 'react'
import { MdOutlineCancel } from "react-icons/md";
import styles from './cancelButton.module.css'

const CancelButton = ({onDelete}) => {
  return (
    <button className={styles.cancel} onClick={onDelete} >
        <MdOutlineCancel className={styles.icon}/>
    </button>
  )
}

export default CancelButton