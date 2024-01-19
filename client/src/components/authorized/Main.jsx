import { useContext, useState } from "react"
import styles from "./Main.module.css"
import { Context } from "../../main"
import Header from "./Header"
import Navigation from "./Navigation"
import { BrowserRouter, Routes, Route } from "react-router-dom"

export default function Main() {
  const { authStore } = useContext(Context)
  const [ navigationItem, setNavigationItem ] = useState("navigation")

  const states = {
    navigation: <Navigation setNavigationItem={setNavigationItem}></Navigation>,
    "create-set": <h1>Hi</h1>
  }

  return (
    <div className={styles.wrapper}>
      <Header />
      {states[navigationItem]}
    </div>
  )
}
