import { observer } from 'mobx-react-lite'
import SpeechModal from './SpeechModal'
import CardsAmount from './CardsAmountModal'
import TransitionModal from '../ui/TransitionModal'

function CreateSetModal({ state, setState }) {
  const states = {
    partOfSpeech: <SpeechModal setState={setState} />,
    amountOfCards: <CardsAmount setState={setState} />
  }

  return (
    <TransitionModal stateAsKey={state}>
        <div className="flex box-border py-8 px-12 relative flex-col justify-center items-center gap-[1.3rem]">
            {states[state]}
        </div>
    </TransitionModal>
  )
}

export default observer(CreateSetModal)
