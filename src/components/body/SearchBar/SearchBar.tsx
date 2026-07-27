import React from 'react'
import styles from './SearchBar.module.css'

type SearchBarProps = {

    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void

}

export const SearchBar:React.FC<SearchBarProps> = ({value, onChange}) => {

    return (

        <input
            type='text'
            value={value}
            onChange={onChange}
            placeholder='Search by title, description, tag, or URL...'
            className={styles['search-input']}
        />

    )

}