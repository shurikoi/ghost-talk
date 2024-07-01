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
import { observer } from 'mobx-react-lite'
import Modal from '../ui/Modal'
import { FormModalContext } from '../../contexts/FormModalContext'
import CreateSetModal from './CreateSetModal'

function CreateSetBySource() {
  const { setStore } = useContext(AuthorizedContext)
  const [title, setTitle] = useState('')
  const { modalMenuStore } = useContext(FormModalContext)
  const [currentState, setCurrentState] = useState('')

  const handleSubmit = async () => {
    // setStore.setTitle(title)
    // const response = await setStore.createSet()
    // if (!response) {
    //   toast.error('Something went wrong :(')
    //   return
    // }
    // navigate(`/set/${response.link}`)
    // toast.success('Hooray!')
  }

  const handleModal = (state) => {
    setCurrentState(state)
    modalMenuStore.addClass()
  }

  return (
    <div className={styles.main}>
      <div className={styles.topWrapper}>
        <BackBtn />
        <CreateSetTitle title="Create a new learning set by source" />
      </div>
      <FormInput
        value={title}
        setValue={setTitle}
        placeholder={`Enter the title, for example "German - City"`}
      />
      <div className={styles.typeContentWrapper}>
        <TypeContent />
      </div>
      <div className={styles.detailsContainer}>
        <div className={`${styles.detail}`}>
          <div
            className={styles.description}
            onClick={() => handleModal('partOfSpeech')}
          >
            Part of Speech
          </div>
          <CreateSetModal state={currentState} setState={setCurrentState}/>
        </div>
        <div className={`${styles.detail}`}>
          <div
            className={styles.description}
            onClick={() => handleModal('amountOfCards')}
          >
            Amount of Cards
          </div>
        </div>
      </div>
      <div className={styles.submitWrapper}>
        <CreateBtn onClick={handleSubmit} />
      </div>
    </div>
  )
}

export default observer(CreateSetBySource)
