import { useState } from 'react'
import DefaultForm from './DefaultForm'
import SignIn from './SignIn'
import SignUp from './SignUp'
import { observer } from 'mobx-react-lite'
import TransitionModal from '../ui/TransitionModal'

function AuthForm() {
  const [currentState, setCurrentState] = useState('default')

  const states = {
    default: <DefaultForm setCurrentState={setCurrentState}></DefaultForm>,
    signIn: <SignIn setCurrentState={setCurrentState}></SignIn>,
    signUp: <SignUp setCurrentState={setCurrentState}></SignUp>,
  }

  return (
    <TransitionModal stateAsKey={currentState}>
      <div className="flex box-border py-8 px-12 relative flex-col justify-center items-center gap-[1.3rem]">
        {states[currentState]}
      </div>
    </TransitionModal>
  )
}

export default observer(AuthForm)
