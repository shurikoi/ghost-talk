import { useContext, useState } from "react"
import styles from "./Main.module.css"
import Header from "./Header"
import Navigation from "./Navigation"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Context } from "../../contexts/Context"
import CreateSet from "./CreateSet"

export default function Main() {
  const { authStore } = useContext(Context)
  const [ navigationItem, setNavigationItem ] = useState("navigation")

  const states = {
    navigation: <Navigation setNavigationItem={setNavigationItem}></Navigation>,
    "create-set": <CreateSet></CreateSet>
  }

  return (
    <div className={styles.wrapper}>
      <Header />
      {states[navigationItem]}
    </div>
  )
}
