import { CSSTransition, SwitchTransition } from 'react-transition-group'
import Modal from './Modal'

export default function TransitionModal({ children, stateAsKey }) {
  return (
    <Modal>
      <SwitchTransition mode={'out-in'}>
        <CSSTransition
          key={stateAsKey}
          timeout={300}
          classNames={{
            appear: 'opacity-0',
            appearActive: 'transition-opacity duration-300 opacity-100',
            enter: 'opacity-0',
            enterActive: 'transition-opacity duration-300 opacity-100',
            exitActive: 'transition-opacity duration-200 opacity-0',
          }}
        >
          {children}
        </CSSTransition>
      </SwitchTransition>
    </Modal>
  )
}
