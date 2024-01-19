import styles from "./AuthForm.module.css"
import { useContext, useState } from "react"
import DefaultForm from "./DefaultForm"
// import { CSSTransition, SwitchTransition } from "react-transition-group"
import SignIn from "./SignIn"
import SignUp from "./SignUp"
import { observer } from "mobx-react-lite"
import { FormModalContext } from "../../contexts/FormModalContext"

function AuthForm({ className }) {
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
      <div className={styles.authForm} action="" >
        {states[currentState]}
      </div>
    </div>
  )
}

export default observer(AuthForm)
