import React from 'react'
import styles from './Input.module.css'

type TextInputProps = {

    label:string,
    value:string | number,
    onChange:React.ChangeEventHandler<HTMLInputElement>,
    placeholder?:string,
    error?:string


}

export const TextInput:React.FC<TextInputProps> = ({value,onChange,label,error,placeholder}) => {
  return (

    <div className={styles['input-group']}>

      <label className={styles.label}>{label}</label>
      <input type='text' value={value} onChange={onChange} placeholder={placeholder} className={styles.input}/>

      {error && <p className={styles['error-text']}>{error}</p>}

    </div>

  )
}
