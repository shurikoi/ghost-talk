import { useContext } from "react"
import styles from "./Header.module.css"
import { Context } from "../../contexts/Context"

export default function Header() {
  const { authStore } = useContext(Context)
  return (
    <div className={styles.header}>
      <div className={styles.name}>Lexify</div>
      <button className={styles.signOutBtn} onClick={() => authStore.signOut()}>Sign Out</button>
    </div>
  )
}
