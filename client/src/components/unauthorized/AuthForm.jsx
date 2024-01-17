import "./AuthForm.css"
import { useContext, useState } from "react"
import DefaultForm from "./DefaultForm"
// import { CSSTransition, SwitchTransition } from "react-transition-group"
import SignIn from "./SignIn"
import SignUp from "./SignUp"

export default function AuthForm() {
  const [currentState, setCurrentState] = useState("default")

  const states = {
    default: (
      <DefaultForm
        setCurrentState={setCurrentState}
      ></DefaultForm>
    ),
    signIn: <SignIn setCurrentState={setCurrentState}></SignIn>,
    signUp: <SignUp setCurrentState={setCurrentState}></SignUp>,
  }

  return (
    <div className="main">
      <div className="auth-form" action="">
        {states[currentState]}
      </div>
    </div>
  )
}
