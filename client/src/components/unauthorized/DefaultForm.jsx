import styles from "./AuthForm.module.css"
import { useContext, useEffect } from "react"
import SubmitIcon from "../ui/icon/SubmitIcon.jsx"
import { Context } from "../../contexts/Context"
import { observer } from "mobx-react-lite"

function DefaultForm({ setCurrentState }) {
  const { authStore, userStore } = useContext(Context)
  const email = userStore.email
  let isFilled = !!email //getting boolean if input is filled

  const handleSubmit = async () => {
    const data = await authStore.checkUser(email)

    if (data.isExist) setCurrentState("signIn")
    else setCurrentState("signUp")
  }

  const handleKeyDown = (e) => {
    if (e.key == "Enter" && isFilled) handleSubmit()
  }

  return (
    <>
      <div className={styles.title}>Sign in or sign up in seconds</div>
      <div className={styles.description}>
        Use your email address. If you do not have an account, we will help you
        create one.
      </div>
      <div className={`${styles.inputWrapper} ${styles.w18}`}>
        <input
          type="text"
          placeholder="example@gmail.com"
          value={email}
          onChange={(e) => {
            userStore.setEmail(e.target.value.trim())
          }}
          onKeyDown={handleKeyDown}
        />
        <SubmitIcon
          className={styles.submitBtn}
          onClick={handleSubmit}
          isFilled={isFilled}
        />
      </div>
    </>
  )
}

export default observer(DefaultForm)
