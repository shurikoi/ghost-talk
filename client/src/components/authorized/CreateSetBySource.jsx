import { Link, useNavigate } from 'react-router-dom'
import BackBtn from '../ui/buttons/BackBtn'
import CreateSetTitle from '../ui/createSetTitle'
import styles from './CreateSetBySource.module.css'
import { useContext, useRef, useState } from 'react'
import { AuthorizedContext } from '../../contexts/AuthorizedContext'
import CreateBtn from '../ui/buttons/CreateBtn'
import toast from 'react-hot-toast'
import TypeContent from './TypeContent'

export default function CreateSetBySource() {
  const { setStore } = useContext(AuthorizedContext)
  //   const [title, setTitle] = useState('')
  const title = useRef('')
  const navigate = useNavigate()

  //   const options = [
  //     { value: 'nouns', label: 'nouns' },
  //     { value: 'adjectives', label: 'adjectives' },
  //     { value: 'verbs', label: 'verbs' },
  //     { value: 'adverbs', label: 'adverbs' },
  //   ]

  const handleSubmit = async () => {
    setStore.setTitle(title)
    const response = await setStore.createSet()
    if (!response) {
      toast.error('Something went wrong :(')
      return
    }
    navigate(`/set/${response.link}`)
    toast.success('Hooray!')
  }

  return (
    <div className={styles.main}>
      <div className={styles.topWrapper}>
        <BackBtn />
        <CreateSetTitle title="Create a new learning set by source" />
      </div>
      <input
        type="text"
        className={`${styles.setTitle} ${styles.text}`}
        placeholder={`Enter the title, for example "German - City"`}
        ref={title}
      />
      <TypeContent />
      <div className={styles.submitWrapper}>
        <CreateBtn onClick={handleSubmit} />
      </div>
    </div>
  )
}
