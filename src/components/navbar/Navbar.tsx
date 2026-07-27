import React from 'react'
import styles from './Navbar.module.css'
import { Button } from '../inputs/Button'
import {Text} from '../text/Text'

import Logo from '../../assets/agenda.png'

type NavbarProps = {

  onAddLinkClick: () => void

}

export const Navbar:React.FC<NavbarProps> = ({onAddLinkClick}) => {

  return (

    <nav className={styles.navbar}>

      <div className={styles['navbar-content-container']}>

        <Text variant='h1' className={styles["bookmark-title"]}>Pin Pocket Bookmark</Text>
        <Button value='Add Link' type='button' className={styles.addLinkBtn} onClick={onAddLinkClick}/>

      </div>

    </nav>
  )
}
