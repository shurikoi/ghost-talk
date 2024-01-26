import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import styles from "./Header.module.css"
import { Context } from "../../contexts/Context"

export default function Header() {
  const { authStore } = useContext(Context)
  const navigate = useNavigate()

  const handleSignOut = async () => {
    await authStore.signOut()
    navigate("/")

  }
  return (
    <div className={styles.header}>
      <Link to="/" className="link">
      <div className={styles.projectName}>Lexify</div>
      </Link>
      <button className={styles.signOutBtn} onClick={handleSignOut}>Sign Out</button>
    </div>
  )
}
