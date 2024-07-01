import { observer } from 'mobx-react-lite'
import Modal from '../ui/Modal'
import { useState } from 'react'
import SpeechModal from './SpeechModal'
import CardsAmount from './CardsAmountModal'

function CreateSetModal({ state, setState }) {
//   const [currentState, setCurrentState] = useState('partOfSpeech')

  const states = {
    partOfSpeech: <SpeechModal setState={setState} />,
    amountOfCards: <CardsAmount />
  }
  return (
    <Modal>
        <div className="flex box-border py-8 px-12 relative flex-col justify-center items-center gap-[1.3rem]">
            {states[state]}
        </div>
    </Modal>
  )
}

export default observer(CreateSetModal)
