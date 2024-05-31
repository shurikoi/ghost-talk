import { Link, useNavigate } from 'react-router-dom'
import BackBtn from '../ui/buttons/BackBtn'
import CreateSetTitle from '../ui/CreateSetTitle'
import styles from './CreateSetBySource.module.css'
import { useContext, useRef, useState } from 'react'
import { AuthorizedContext } from '../../contexts/AuthorizedContext'
import CreateBtn from '../ui/buttons/CreateBtn'
import toast from 'react-hot-toast'
import TypeContent from './TypeContent'
import FormInput from '../ui/FormInput'

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
      <FormInput
        ref={title}
        placeholder={`Enter the title, for example "German - City"`}
      />
      <div className={styles.typeContentWrapper}>
        <TypeContent />
      </div>
      <div className={styles.detailsContainer}>
        <div className={`${styles.speechPartWrapper} ${styles.detail}`}>
          <div className={styles.description}>Part of Speech</div>
        </div>
        <div className={`${styles.cardAmountWrapper} ${styles.detail}`}>
          <div className={styles.description}>Amount of Cards</div>
        </div>
      </div>
      <div className={styles.submitWrapper}>
        <CreateBtn onClick={handleSubmit} />
      </div>
    </div>
  )
}
