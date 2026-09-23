import React from 'react'
import styles from './Footer.module.css'
import {Text} from '../text/Text'

export const Footer = () => {
  return (

    <footer className={styles.footer}>


    <div className={styles['footer-bottom']}>


    <Text variant='p'>© 2026 PinPocket. All rights reserved.</Text>
    
    </div>

    </footer>
  )
}
