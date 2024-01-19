import { useContext, useState } from "react"
import SubmitIcon from "../ui/icon/SubmitIcon"
import { Context } from "../../contexts/Context"
import styles from "./AuthForm.module.css"

export default function SignIn({ setCurrentState }) {
  const [password, setPassword] = useState("")
  const { authStore, userStore } = useContext(Context)
  const email = userStore.email
  const setEmail = userStore.setEmail
  let isFilled = !!password

  const handleSubmit = async () => {
    await authStore.signIn(email, password)
  }

  const handleKeyDown = (e) => {
    if (e.key == "Enter" && isFilled) handleSubmit()
  }

  return (
    <>
      <div className={styles.title}>Sign up</div>
      <div className={styles.description}>via {email}</div>
      <div className={`${styles.inputWrapper} ${styles.w18}`}>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value.trim())
          }}
          onKeyDown={handleKeyDown}
        />
        <SubmitIcon
          className={styles.submitBtn}
          onClick={handleSubmit}
          isFilled={isFilled}
        />
      </div>
      <button onClick={() => setCurrentState("default")}>
        Back to 'default'
      </button>
    </>
  )
}
