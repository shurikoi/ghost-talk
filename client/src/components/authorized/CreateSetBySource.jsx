import { useNavigate } from 'react-router-dom'
import BackBtn from '../ui/buttons/BackBtn'
import CreateSetTitle from '../ui/CreateSetTitle'
import { useContext, useState } from 'react'
import { AuthorizedContext } from '../../contexts/AuthorizedContext'
import CreateBtn from '../ui/buttons/CreateBtn'
import toast from 'react-hot-toast'
import TypeContent from './TypeContent'
import FormInput from '../ui/FormInput'
import { observer } from 'mobx-react-lite'
import { FormModalContext } from '../../contexts/FormModalContext'
import CreateSetModal from './CreateSetModal'

function CreateSetBySource() {
  const { setStore } = useContext(AuthorizedContext)
  const [title, setTitle] = useState('')
  const [source, setSource] = useState('')
  const { modalMenuStore } = useContext(FormModalContext)
  const [currentState, setCurrentState] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async () => {
    setStore.setTitle(title)
    setStore.setSource(source)

    if (!(title && source && setStore.amountOfCards && setStore.partOfSpeech)) {
      toast.error("Missing info alert!")
      return
    }

    const response = await setStore.createSetBySource()
    if (!response) {
      toast.error('Something went wrong :(')
      return
    }
    navigate(`/set/${response.link}`)
    toast.success('Hooray!')
  }

  const handleModal = (state) => {
    setCurrentState(state)
    modalMenuStore.addClass()
  }

  return (
    <div className="flex flex-col text-white gap-[2rem]">
      <div className="flex flex-col gap-[1.2rem]">
        <BackBtn />
        <CreateSetTitle title="Create a new learning set by source" />
      </div>
      <FormInput
        value={title}
        setValue={setTitle}
        placeholder={`Enter the title, for example "German - City"`}
      />
      <div className="p-[10px] bg-[#2e3856] rounded-2xl">
        <TypeContent value={source} setValue={setSource} />
      </div>
      <div className="flex gap-[0.8rem]">
        <div className="flex-1 bg-[#2e3856] text-center cursor-pointer rounded-xl p-[2rem] justify-center hover:bg-[#323d5b]">
          <div
            className="font-eUkraineHead text-sm uppercase"
            onClick={() => handleModal('partOfSpeech')}
          >
            Part of Speech
          </div>
          <CreateSetModal state={currentState} setState={setCurrentState} />
        </div>
        <div className="flex-1 bg-[#2e3856] text-center cursor-pointer rounded-xl p-[2rem] justify-center hover:bg-[#323d5b]">
          <div
            className="font-eUkraineHead text-sm uppercase"
            onClick={() => handleModal('amountOfCards')}
          >
            Amount of Cards
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <CreateBtn onClick={handleSubmit} />
      </div>
    </div>
  )
}

export default observer(CreateSetBySource)
