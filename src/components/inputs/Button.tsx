import React, { type InputHTMLAttributes } from 'react'
import styles from './Input.module.css'

export const Button:React.FC<InputHTMLAttributes<HTMLInputElement>> = ({...rest}) => {
  return (

    <input className={styles.button} readOnly {...rest}/>

  )
  
}
