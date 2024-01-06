import "./AuthForm.css"
import { useState } from "react"
import DefaultForm from "./DefaultForm"
// import { CSSTransition, SwitchTransition } from "react-transition-group"
import SignIn from "./SignIn"
import SignUp from "./SignUp"

export default function AuthForm() {
  const [email, setEmail] = useState("")
  const [currentState, setCurrentState] = useState("default")

  const states = {
    default: (
      <DefaultForm
        setEmail={setEmail}
        email={email}
        setCurrentState={setCurrentState}
      ></DefaultForm>
    ),
    signIn: <SignIn email={email} setCurrentState={setCurrentState}></SignIn>,
    signUp: <SignUp email={email} setCurrentState={setCurrentState}></SignUp>,
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
