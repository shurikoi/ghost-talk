import styles from "./Main.module.css"
import Header from "./Header"
import { AuthorizedContext } from "../../contexts/AuthorizedContext"
import setStore from "../../stores/setStore"
import Navigation from "./Navigation"

export default function Main({ children }) {
  return (
    <AuthorizedContext.Provider value={{ setStore }}>
      <div className={styles.wrapper}>
      <Header />
        {children ? (
          <div className={styles.childrenWrapper}>{children}</div>
        ) : (
          <Navigation />
        )}
      </div>
    </AuthorizedContext.Provider>
  )
}
