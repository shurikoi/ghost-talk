import styles from "./AuthForm.module.css"
import { useContext, useState } from "react"
import { Context } from "../../contexts/Context"
import { FormModalContext } from "../../contexts/FormModalContext.js"
import BackArrowIcon from "../ui/icon/BackArrowIcon.jsx"
import BasicSubmitButton from "../ui/buttons/BasicSubmitButton.jsx"
import BasicInput from "../ui/BasicInput.jsx"

export default function DefaultForm({ setCurrentState }) {
  const { authStore } = useContext(Context)
  const { modalMenuStore } = useContext(FormModalContext)
  const [ email, setEmail ] = useState("")
  let isFilled = !!email

  const handleSubmit = async () => {
    const data = await authStore.checkUser(email)

    if (data.isExist) setCurrentState("signIn")
    else setCurrentState("signUp")
  }

  return (
    <>
      <BackArrowIcon
        onClick={() => {
          modalMenuStore.removeClass()
        }}
      />
      <div className={styles.title}>Sign in in seconds</div>
      <div className={styles.description}>
        If you do not have an account, we will help you create one
      </div>
      <BasicInput
        placeholder={"Your email"}
        value={email}
        setValue={setEmail}
        isFilled={isFilled}
        handleSubmit={handleSubmit}
      />
      <BasicSubmitButton isFilled={isFilled} onClick={handleSubmit} />
    </>
  )
}