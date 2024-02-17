import { useContext, useState } from "react"
import SubmitIcon from "../ui/icon/SubmitIcon"
import { Context } from "../../contexts/Context"
import styles from "./AuthForm.module.css"
import BackArrowIcon from "../ui/icon/BackArrowIcon"
import BasicInput from "../ui/BasicInput"
import BasicSubmitButton from "../ui/buttons/BasicSubmitButton"

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
      <BackArrowIcon
        className={styles.arrow}
        onClick={() => setCurrentState("default")}
      />
      <div className={styles.title}>Sign up to continue</div>
      <div className={styles.description}>
        creating an account using {email}
      </div>
      <div className={styles.inputsWrapper}>
        <BasicInput
          placeholder={"First name"}
          value={name}
          setValue={setName}
          handleSubmit={handleSubmit}
        />
        <BasicInput
          placeholder={"Second name"}
          value={surname}
          setValue={setSurname}
          handleSubmit={handleSubmit}
        />
      </div>
      <BasicInput
        placeholder={"Password"}
        type="password"
        value={password}
        setValue={setPassword}
        handleSubmit={handleSubmit}
      />
      <BasicSubmitButton onClick={handleSubmit} />
    </>
  )
}
