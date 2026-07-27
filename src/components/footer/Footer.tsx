import React from 'react'
import styles from './Footer.module.css'
import {Text} from '../text/Text'

import Logo from '../../assets/logo.png'
import Github from '../../assets/github.png'
import Instagram from '../../assets/instagram.png'
import Facebook from '../../assets/facebook.png'
import  Twitter from '../../assets/x.png'
import Pinterest from '../../assets/pinterest.png'
import Linkedin from '../../assets/linkedin.png'






export const Footer = () => {
  return (

    <footer className={styles.footer}>


    <div className={styles['footer-bottom']}>


    <Text variant='p'>© 2026 PinPocket. All rights reserved.</Text>
    
    </div>

    </footer>
  )
}
