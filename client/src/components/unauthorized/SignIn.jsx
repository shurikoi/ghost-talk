import { useContext, useState } from "react"
import SubmitIcon from "../ui/icon/SubmitIcon"
import { Context } from "../../contexts/Context"
import styles from "./AuthForm.module.css"
import AuthInput from "../ui/AuthInput"
import AuthSubmitButton from "../ui/buttons/AuthSubmitButton"
import AuthBackArrowIcon from "../ui/icon/AuthBackArrowIcon"

export default function SignIn({ setCurrentState }) {
  const [password, setPassword] = useState("")
  const { authStore } = useContext(Context)
  const email = authStore.email
  let isFilled = !!password

  const handleSubmit = async () => {
    await authStore.signIn(email, password)
  }

  return (
    <>
      <AuthBackArrowIcon
        className={styles.arrow}
        onClick={() => setCurrentState("default")}
      />
      <div className={styles.title}>Sign in to continue</div>
      <div className={styles.description}>via {email}</div>
      <AuthInput
        placeholder={"Your password"}
        value={password}
        setValue={setPassword}
        isFilled={isFilled}
        handleSubmit={handleSubmit}
      />
      <AuthSubmitButton isFilled={isFilled} onClick={handleSubmit} />
    </>
  )
}
