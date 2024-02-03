import styles from "./AuthForm.module.css"
import { useContext, useRef, useState } from "react"
import DefaultForm from "./DefaultForm"
// import { CSSTransition, SwitchTransition } from "react-transition-group"
import SignIn from "./SignIn"
import SignUp from "./SignUp"
import { observer } from "mobx-react-lite"
import { FormModalContext } from "../../contexts/FormModalContext"
import { CSSTransition, SwitchTransition } from "react-transition-group"

function AuthForm({ className = "" }) {
  const [currentState, setCurrentState] = useState("default")
  const { authFormStore } = useContext(FormModalContext)

  const states = {
    default: <DefaultForm setCurrentState={setCurrentState}></DefaultForm>,
    signIn: <SignIn setCurrentState={setCurrentState}></SignIn>,
    signUp: <SignUp setCurrentState={setCurrentState}></SignUp>,
  }

  return (
    <div
      className={`${styles.main} ${className} ${
        authFormStore.isFormActive ? styles.active : ""
      }`}
    >
      <div
        className={styles.behind}
        onClick={() => authFormStore.removeClass()}
      ></div>
      <div className={styles.authForm}>
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
      </div>
    </div>
  )
}

export default observer(AuthForm)
