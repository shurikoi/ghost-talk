import { useContext, useState } from "react"
import SubmitIcon from "../ui/icon/SubmitIcon"
import { Context } from "../../contexts/Context"
import styles from "./AuthForm.module.css"
import AuthBackArrowIcon from "../ui/icon/AuthBackArrowIcon"
import AuthInput from "../ui/AuthInput"
import AuthSubmitButton from "../ui/buttons/AuthSubmitButton"

export default function SignUp({ setCurrentState }) {
  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")
  const [password, setPassword] = useState("")
  const { authStore } = useContext(Context)
  const email = authStore.email

  const handleSubmit = async () => {
    await authStore.signUp(email, name, surname, password)
  }

  return (
    <>
      <AuthBackArrowIcon
        className={styles.arrow}
        onClick={() => setCurrentState("default")}
      />
      <div className={styles.title}>Sign up to continue</div>
      <div className={styles.description}>
        creating an account using {email}
      </div>
      <div className={styles.inputsWrapper}>
        <AuthInput
          placeholder={"First name"}
          value={name}
          setValue={setName}
          handleSubmit={handleSubmit}
        />
        <AuthInput
          placeholder={"Second name"}
          value={surname}
          setValue={setSurname}
          handleSubmit={handleSubmit}
        />
      </div>
      <AuthInput
        placeholder={"Password"}
        value={password}
        setValue={setPassword}
        handleSubmit={handleSubmit}
      />
      <AuthSubmitButton onClick={handleSubmit} />
    </>
  )
}
