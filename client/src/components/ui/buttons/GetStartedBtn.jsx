import { useContext } from "react"
import styles from "./GetStartedBtn.module.css"
import { FormModalContext } from "../../../contexts/FormModalContext"

export default function GetStartedBtn() {
    const { authFormStore } = useContext(FormModalContext)
    return (
        <button className={styles.getStarted} onClick={() => authFormStore.addClass()}>Get Started</button>
    )
}