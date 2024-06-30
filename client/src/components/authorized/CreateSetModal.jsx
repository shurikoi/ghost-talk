import { observer } from 'mobx-react-lite'
import Modal from '../ui/Modal'
import { useState } from 'react'
import SpeechModal from './SpeechModal'

function CreateSetModal() {
  const [currentState, setCurrentState] = useState('default')

  const states = {
    default: <SpeechModal />,
  }
  return (
    <Modal>
        <div className="flex box-border py-8 px-12 relative flex-col justify-center items-center gap-[1.3rem]">
            {states[currentState]}
        </div>
    </Modal>
  )
}

export default observer(CreateSetModal)
