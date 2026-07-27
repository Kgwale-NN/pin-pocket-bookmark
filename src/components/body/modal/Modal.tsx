import React from 'react'
import styles from './Modal.module.css'
import { Button } from '../../inputs/Button'

type ModalProps = {

    isOpen: boolean,
    onClose: () => void,
    children: React.ReactNode
}

export const Modal:React.FC<ModalProps> = ({isOpen,onClose,children}) => {


    if(!isOpen){

    return null

    }

    const handleOverlayClick = () =>{

        onClose()
    }

    const handleContenClick = (e : React.MouseEvent) => {

        e.stopPropagation()
    }


  return (


    <div className={styles.overlay} onClick={handleOverlayClick}>


     <div className={styles['modal-content-container']} onClick={handleContenClick}>

         <Button value='X' className={styles['close-button']} onClick={onClose}/>

         {children}

     </div>


    </div>


  )
}