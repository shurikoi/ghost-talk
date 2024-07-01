import { CSSTransition, SwitchTransition } from 'react-transition-group'
import Modal from './Modal'

export default function TransitionModal({ children, stateAsKey }) {
  return (
    <Modal>
      <SwitchTransition mode={'out-in'}>
        <CSSTransition
          key={stateAsKey}
          timeout={100}
          classNames={{
            enter: 'translate-x-full',
            enterActive: 'translate-x-0 transiotion duration-100',
            exit: 'translate-x-0',
            exitActive: 'transiotion duration-100',
          }}
        >
          {children}
        </CSSTransition>
      </SwitchTransition>
    </Modal>
  )
}
