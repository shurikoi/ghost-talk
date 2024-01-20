import { useContext, useState } from "react"
import styles from "./Main.module.css"
import Header from "./Header"
import Navigation from "./Navigation"
import { Context } from "../../contexts/Context"
import CreateSet from "./CreateSet"

export default function Main({ children }) {
  const { authStore } = useContext(Context)
  const [ navigationItem, setNavigationItem ] = useState("navigation")

  const states = {
    navigation: <Navigation></Navigation>,
    "create-set": <CreateSet></CreateSet>
  }

  return (
    <div className={styles.wrapper}>
      <Header />
      {/* {states["navigation"]} */}
      {children}
    </div>
  )
}
