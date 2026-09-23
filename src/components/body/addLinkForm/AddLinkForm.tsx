import React, { useState } from 'react'
import styles from './AddLinkForm.module.css'
import { TextInput } from '../../inputs/TextInput'
import { Button } from '../../inputs/Button'
import { Text } from '../../text/Text'

export type LinkItem = {

  id: string,
  title: string,
  url: string,
  description: string,
  tags: string[]

}

type AddLinkFormProps = {

  onAddLink: (newLink: LinkItem) => void
  onUpdateLink: (updatedLink: LinkItem) => void
  onClose: () => void
  linkToEdit: LinkItem | null
}


export const AddLinkForm: React.FC<AddLinkFormProps> = ({ onAddLink, onUpdateLink, onClose, linkToEdit }) => {

  const [title, setTitle] = useState(linkToEdit?.title ?? '')
  const [url, setUrl] = useState(linkToEdit?.url ?? '')
  const [description, setDescription] = useState(linkToEdit?.description ?? '')
  const [tags, setTags] = useState(linkToEdit?.tags.join(', ') ?? '')

  const [titleError, setTitleError] = useState('')
  const [urlError, setUrlError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {

    e.preventDefault()

    let hasError = false


    if (title.trim() === '') {

      setTitleError('Title is required')
      hasError = true
    } else {

      setTitleError('')
    }

    if (url.trim() === '') {
      setUrlError('Link is required')
      hasError = true
    } else if (!url.startsWith('http://') && !url.startsWith('https://')) {
      setUrlError('Link must start with http:// or https://')
      hasError = true
    } else {
      setUrlError('')
    }

    if (hasError) {
      return
    }

    const tagsArray = tags
      .split(',')
      .map(tag => tag.trim())
      .filter(tag => tag !== '')

    if (linkToEdit) {

      const updatedLink: LinkItem = {
        id: linkToEdit.id,
        title: title.trim(),
        url: url.trim(),
        description: description.trim(),
        tags: tagsArray
      }

      onUpdateLink(updatedLink)

    } else {

      const newLink: LinkItem = {
        id: Date.now().toString(),
        title: title.trim(),
        url: url.trim(),
        description: description.trim(),
        tags: tagsArray
      }

      onAddLink(newLink)

    }

    onClose()
  }

  return (

    <form onSubmit={handleSubmit} className={styles.form}>

      <Text variant='h3' className={styles['form-heading']}>
        {linkToEdit ? 'Edit Link' : 'Add New Link'}
      </Text>

      <TextInput
        label='Title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder='e.g. My Favorite Recipe Site'
        error={titleError}
      />

      <TextInput
        label='Link (URL)'
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder='https://example.com'
        error={urlError}
      />

      <TextInput
        label='Description'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder='What is this link about?'
      />

      <TextInput
        label='Tags (optional, comma-separated)'
        value={tags}
        onChange={(e) => setTags(e.target.value)}
        placeholder='e.g. food, recipes, italian'
      />

      <Button value={linkToEdit ? 'Update Link' : 'Save Link'} type='submit' className={styles['save-btn']} />

    </form>

  )
}
