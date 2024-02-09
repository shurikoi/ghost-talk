import styles from "./AuthForm.module.css"
import { useContext, useState } from "react"
import { Context } from "../../contexts/Context"
import { FormModalContext } from "../../contexts/FormModalContext.js"
import AuthBackArrowIcon from "../ui/icon/AuthBackArrowIcon.jsx"
import AuthSubmitButton from "../ui/buttons/AuthSubmitButton.jsx"
import AuthInput from "../ui/AuthInput.jsx"

export default function DefaultForm({ setCurrentState }) {
  const { authStore } = useContext(Context)
  const { authFormStore } = useContext(FormModalContext)
  const [ email, setEmail ] = useState("")
  let isFilled = !!email

  const handleSubmit = async () => {
    const data = await authStore.checkUser(email)

    if (data.isExist) setCurrentState("signIn")
    else setCurrentState("signUp")
  }

  return (
    <>
      <AuthBackArrowIcon
        onClick={() => {
          authFormStore.removeClass()
        }}
      />
      <div className={styles.title}>Sign in in seconds</div>
      <div className={styles.description}>
        If you do not have an account, we will help you create one
      </div>
      <AuthInput
        placeholder={"Your email"}
        value={email}
        setValue={setEmail}
        isFilled={isFilled}
        handleSubmit={handleSubmit}
      />
      <AuthSubmitButton isFilled={isFilled} onClick={handleSubmit} />
    </>
  )
}