import React from 'react'
import styles from './DeleteConfirmation.module.css'
import { Text } from '../../text/Text'
import { Button } from '../../inputs/Button'

type DeleteConfirmationProps = {
  onConfirm: () => void
  onCancel: () => void
}

export const DeleteConfirmation: React.FC<DeleteConfirmationProps> = ({ onConfirm, onCancel }) => {
  return (
    <div className={styles['delete-confirmation']}>
      <Text variant='h3' className={styles.title}>Delete Link</Text>
      <Text variant='p' className={styles.message}>
        Are you sure you want to delete this link? This action cannot be undone.
      </Text>
      <div className={styles['button-container']}>
        <Button 
          value='Cancel' 
          type='button' 
          className={styles['cancel-btn']} 
          onClick={onCancel} 
        />
        <Button 
          value='Delete' 
          type='button' 
          className={styles['delete-btn']} 
          onClick={onConfirm} 
        />
      </div>
    </div>
  )
}
