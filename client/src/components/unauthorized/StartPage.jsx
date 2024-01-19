import Header from "./Header"
import AuthForm from "./AuthForm"
import styles from "./StartPage.module.css"
import { FormModalContext } from "../../contexts/FormModalContext"
import authFormStore from "../../stores/authFormStore"

export default function StartPage() {
  return (
      <FormModalContext.Provider value={{ authFormStore }}>
        <div className={styles.wrapper}>
        <Header />
        <AuthForm className={styles.authForm} />
        </div>
      </FormModalContext.Provider>
  )
}
