import { useState } from 'react'
import './App.css'
import { Navbar } from './components/navbar/Navbar'
import { Footer } from './components/footer/Footer'
import { Modal } from './components/body/modal/Modal'
import { MyLinks } from './components/body/myLinks/MyLinks'
import { AddLinkForm } from './components/body/addLinkForm/AddLinkForm'
import { DeleteConfirmation } from './components/body/deleteConfirmation/DeleteConfirmation'
import type { LinkItem } from './components/body/addLinkForm/AddLinkForm'

import Bookmark from './assets/undraw_save-to-bookmarks_9o51-removebg-preview.png'

function App() {
  const [links, setLinks] = useState<LinkItem[]>(() => {
    const savedLinks = localStorage.getItem('links')
    return savedLinks ? JSON.parse(savedLinks) : []
  })
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingLink, setEditingLink] = useState<LinkItem | null>(null)
  const [notification, setNotification] = useState<string | null>(null)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [linkToDelete, setLinkToDelete] = useState<string | null>(null)

  const showNotification = (message: string) => {
    setNotification(message)
    setTimeout(() => {
      setNotification(null)
    }, 3000)
  }

  const openModal = () => {
    setEditingLink(null)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setEditingLink(null)
  }

  const handleAddLink = (newLink: LinkItem) => {
    const updatedLinks = [...links, newLink]
    setLinks(updatedLinks)
    localStorage.setItem('links', JSON.stringify(updatedLinks))
    showNotification('Link saved!')
  }

  const handleDeleteLink = (id: string) => {
    setLinkToDelete(id)
    setIsDeleteModalOpen(true)
  }

  const confirmDelete = () => {
    if (linkToDelete) {
      const updatedLinks = links.filter((link) => link.id !== linkToDelete)
      setLinks(updatedLinks)
      localStorage.setItem('links', JSON.stringify(updatedLinks))
      showNotification('Link deleted!')
      setLinkToDelete(null)
      setIsDeleteModalOpen(false)
    }
  }

  const cancelDelete = () => {
    setLinkToDelete(null)
    setIsDeleteModalOpen(false)
  }

  const handleEditLink = (link: LinkItem) => {
    setEditingLink(link)
    setIsModalOpen(true)
  }

  const handleUpdateLink = (updatedLink: LinkItem) => {
    const updatedLinks = links.map((link) => (link.id === updatedLink.id ? updatedLink : link))
    setLinks(updatedLinks)
    localStorage.setItem('links', JSON.stringify(updatedLinks))
    showNotification('Link updated!')
  }

  return (
    <div className="app-shell">
      <Navbar onAddLinkClick={openModal} />

      {notification && (
        <div
          style={{
            position: 'fixed',
            top: '100px',
            right: '20px',
            backgroundColor: '#442F38',
            color: 'white',
            padding: '14px 20px',
            borderRadius: '10px',
            boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
            zIndex: '1000',
          }}
        >
          {notification}
        </div>
      )}

      <main className="main-content">
        <MyLinks links={links} onEdit={handleEditLink} onDelete={handleDeleteLink} />
        
        <img src={Bookmark} alt="Bookmark Illustration" className="bookmark-illu" />
        <img src={Bookmark} alt="Bookmark Illustration" className="bookmark-illu-right" />
      </main>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <AddLinkForm
          onAddLink={handleAddLink}
          onUpdateLink={handleUpdateLink}
          onClose={closeModal}
          linkToEdit={editingLink}
        />
      </Modal>

      <Modal isOpen={isDeleteModalOpen} onClose={cancelDelete}>
        <DeleteConfirmation
          onConfirm={confirmDelete}
          onCancel={cancelDelete}
        />
      </Modal>

      <Footer />
    </div>
  )
}

export default App
