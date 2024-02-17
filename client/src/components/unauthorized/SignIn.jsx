import { useContext, useState } from "react"
import SubmitIcon from "../ui/icon/SubmitIcon"
import { Context } from "../../contexts/Context"
import styles from "./AuthForm.module.css"
import BasicInput from "../ui/BasicInput"
import BasicSubmitButton from "../ui/buttons/BasicSubmitButton"
import BackArrowIcon from "../ui/icon/BackArrowIcon"

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
      <BackArrowIcon
        className={styles.arrow}
        onClick={() => setCurrentState("default")}
      />
      <div className={styles.title}>Sign in to continue</div>
      <div className={styles.description}>via {email}</div>
      <BasicInput
        placeholder={"Your password"}
        type="password"
        value={password}
        setValue={setPassword}
        isFilled={isFilled}
        handleSubmit={handleSubmit}
      />
      <BasicSubmitButton isFilled={isFilled} onClick={handleSubmit} />
    </>
  )
}
