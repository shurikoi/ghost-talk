import styles from "./Main.module.css"
import Header from "./Header"

export default function Main({ children }) {
  return (
    <div className={styles.wrapper}>
      <Header />
      {children}
    </div>
  )
}
