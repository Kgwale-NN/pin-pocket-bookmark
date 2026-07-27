import React, { useState } from 'react'
import styles from './MyLinks.module.css'
import { Text } from '../../text/Text'
import { SearchBar } from '../SearchBar/SearchBar'
import { LinkCard } from '../linkCard/LinkCard'
import type { LinkItem } from '../addLinkForm/AddLinkForm'

type MyLinksProps = {

    links: LinkItem[],
    onEdit: (link: LinkItem) => void,
    onDelete: (id: string) => void

}

export const MyLinks:React.FC<MyLinksProps> = ({links, onEdit, onDelete}) => {

    const [searchTerm, setSearchTerm] = useState('')

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value)
    }

    const filteredLinks = links.filter((link) => {

        const search = searchTerm.toLowerCase()

        const titleMatch = link.title.toLowerCase().includes(search)
        const urlMatch = link.url.toLowerCase().includes(search)
        const descriptionMatch = link.description.toLowerCase().includes(search)
        const tagsMatch = link.tags.some((tag) => tag.toLowerCase().includes(search))

        return titleMatch || urlMatch || descriptionMatch || tagsMatch

    })

    return (

        <section id='my-links-section' className={styles['my-links-section']}>

            <Text variant='h2' className={styles.heading}>My Links</Text>

            <SearchBar value={searchTerm} onChange={handleSearchChange} />

            {filteredLinks.length === 0 && links.length === 0 && (

                <Text variant='p' className={styles['empty-state']}>
                    No links yet — add your first one! 🔗
                </Text>

            )}

            {filteredLinks.length === 0 && links.length > 0 && (

                <Text variant='p' className={styles['empty-state']}>
                    No links match your search.
                </Text>

            )}

            <div className={styles['links-list']}>

                {filteredLinks.map((link) => (

                    <LinkCard
                        key={link.id}
                        link={link}
                        onEdit={onEdit}
                        onDelete={onDelete}
                    />

                ))}

            </div>

        </section>

    )

}