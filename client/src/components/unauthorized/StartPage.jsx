import Header from "./Header"
import AuthForm from "./AuthForm"
import styles from "./StartPage.module.css"
import { FormModalContext } from "../../contexts/FormModalContext"
import modalMenuStore from "../../stores/modalMenuStore"

export default function StartPage() {
  return (
      <FormModalContext.Provider value={{ modalMenuStore }}>
        <div className={styles.wrapper}>
        <Header />
        <AuthForm />
        </div>
      </FormModalContext.Provider>
  )
}
