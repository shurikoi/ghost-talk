import styles from "./Main.module.css"
import Header from "./Header"
import { AuthorizedContext } from "../../contexts/AuthorizedContext"
import setStore from "../../stores/setStore"
import userStore from "../../stores/userStore"
import Navigation from "./Navigation"
import { SkeletonTheme } from "react-loading-skeleton"

export default function Main({ children }) {
  return (
    <SkeletonTheme baseColor="#3c4767" highlightColor="#4a5675">
    <AuthorizedContext.Provider value={{ setStore, userStore }}>
      <div className={styles.wrapper}>
      <Header />
        {children ? (
          <div className={styles.childrenWrapper}>{children}</div>
        ) : (
          <div className={styles.childrenWrapper}><Navigation /></div>
        )}
      </div>
    </AuthorizedContext.Provider>
    </SkeletonTheme>
  )
}
