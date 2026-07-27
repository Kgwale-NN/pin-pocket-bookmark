import React from 'react'
import styles from './LinkCard.module.css'
import { Text } from '../../text/Text'
import { Button } from '../../inputs/Button'
import type { LinkItem } from '../addLinkForm/AddLinkForm'

type LinkCardProps = {

    link: LinkItem,
    onEdit: (link: LinkItem) => void,
    onDelete: (id: string) => void

}

const tagColors = ['#442f38', '#442f38', '#442f38', '#442f38', '#442f38']

const getTagColor = (tag: string) => {

    let sum = 0

    for (let i = 0; i < tag.length; i++) {
        sum = sum + tag.charCodeAt(i)
    }

    const index = sum % tagColors.length

    return tagColors[index]

}

export const LinkCard:React.FC<LinkCardProps> = ({link, onEdit, onDelete}) => {

    const faviconUrl = `https://www.google.com/s2/favicons?domain=${link.url}&sz=64`

    return (

        <div className={styles['link-card']}>

            <img src={faviconUrl} alt='' className={styles.favicon} />

            <div className={styles['link-card-content']}>

                <Text variant='h4' className={styles['link-title']}>{link.title}</Text>

                <a href={link.url} target='_blank' rel='noreferrer' className={styles['link-url']}>
                    {link.url}
                </a>

                <Text variant='p' className={styles['link-description']}>{link.description}</Text>

                <div className={styles['tags-container']}>

                    {link.tags.map((tag) => (

                        <span
                            key={tag}
                            className={styles.tag}
                            style={{ backgroundColor: getTagColor(tag) }}
                        >
                            {tag}
                        </span>

                    ))}

                </div>

            </div>

            <div className={styles['action-buttons']}>

                <Button value='Edit' type='button' className={styles['edit-btn']} onClick={() => onEdit(link)} />
                <Button value='Delete' type='button' className={styles['delete-btn']} onClick={() => onDelete(link.id)} />

            </div>

        </div>

    )

}