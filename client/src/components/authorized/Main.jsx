import styles from "./Main.module.css"
import Header from "./Header"
import { AuthorizedContext } from "../../contexts/AuthorizedContext"
import setStore from "../../stores/setStore"

export default function Main({ children }) {
  return (
    <AuthorizedContext.Provider value={{ setStore }}>
      <div className={styles.wrapper}>
      <Header />
      {children}
    </div>
    </AuthorizedContext.Provider>
  )
}
