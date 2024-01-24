import { useContext } from "react"
import { Link } from "react-router-dom"
import styles from "./Header.module.css"
import { Context } from "../../contexts/Context"

export default function Header() {
  const { authStore } = useContext(Context)
  return (
    <div className={styles.header}>
      <Link to="/" className="link">
      <div className={styles.projectName}>Lexify</div>
      </Link>
      <Link to="/" className="link"><button className={styles.signOutBtn} onClick={async () => await authStore.signOut()}>Sign Out</button></Link>
    </div>
  )
}