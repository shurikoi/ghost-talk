import './AuthForm.css'
import { useState } from "react"
import DefaultForm from "./DefaultForm"
// import { CSSTransition, SwitchTransition } from "react-transition-group"
import SignUp from "./SignUp/SignUp"

export default function AuthForm() {
  const [email, setEmail] = useState("")
  const [currentState, setCurrectState] = useState("default")

  const states = {
    default: (
      <DefaultForm
        setEmail={setEmail}
        email={email}
        setCurrentState={setCurrectState}
      ></DefaultForm>
    ),
    signUp: <SignUp email={email} setCurrentState={setCurrectState}></SignUp>,
  }

  return (
    // states[currentState]
    <div className="main">
      <div className="auth-form" action="">
        {states[currentState]}
        {/* {states["signUp"]} */}
      </div>
    </div>
  )
}
