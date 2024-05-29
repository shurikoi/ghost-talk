import { Link, useNavigate } from 'react-router-dom'
import BackBtn from '../ui/buttons/BackBtn'
import styles from './CreateSet.module.css'
import { useContext, useState } from 'react'
import { AuthorizedContext } from '../../contexts/AuthorizedContext'
import CreateBtn from '../ui/buttons/CreateBtn'
import toast from 'react-hot-toast'

export default function CreateSetBySource() {
  const { setStore } = useContext(AuthorizedContext)
  const [title, setTitle] = useState('')
  const navigate = useNavigate()

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
        <div className={styles.titleWrapper}>
          <div className={styles.title}>Create a new learning set by source</div>
          <div className={styles.free}>public</div>
        </div>
      </div>
      <input
        type="text"
        className={`${styles.setTitle} ${styles.text}`}
        placeholder={`Enter the title, for example "German - City"`}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className={styles.submitWrapper}>
        <CreateBtn onClick={handleSubmit} />
      </div>
    </div>
  )
}
