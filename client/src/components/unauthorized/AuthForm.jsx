import styles from "./AuthForm.module.css"
import { useState } from "react"
import DefaultForm from "./DefaultForm"
import SignIn from "./SignIn"
import SignUp from "./SignUp"
import { observer } from "mobx-react-lite"
import { CSSTransition, SwitchTransition } from "react-transition-group"
import ModalMenu from "../ui/ModalMenu"

function AuthForm() {
  const [currentState, setCurrentState] = useState("default")

  const states = {
    default: <DefaultForm setCurrentState={setCurrentState}></DefaultForm>,
    signIn: <SignIn setCurrentState={setCurrentState}></SignIn>,
    signUp: <SignUp setCurrentState={setCurrentState}></SignUp>,
  }

  return (
    <ModalMenu>
      <SwitchTransition mode={"out-in"}>
          <CSSTransition
            key={currentState}
            timeout={100}
            classNames={{
              enter: styles.fadeEnter,
              enterActive: styles.fadeEnterActive,
              exit: styles.fadeExit,
              exitActive: styles.fadeExitActive,
            }}
          >
            <div className={styles.wrapper} action="">
              {states[currentState]}
            </div>
          </CSSTransition>
        </SwitchTransition>
    </ModalMenu>
  )
}

export default observer(AuthForm)
