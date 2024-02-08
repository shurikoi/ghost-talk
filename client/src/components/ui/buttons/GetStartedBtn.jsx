import { useContext } from "react"
import styles from "./GetStartedBtn.module.css"
import { FormModalContext } from "../../../contexts/FormModalContext"

export default function GetStartedBtn({ className = "" }) {
    const { modalMenuStore } = useContext(FormModalContext)
    return (
        <button className={`${styles.getStarted} ${className}`} onClick={() => modalMenuStore.addClass()}>Get Started</button>
    )
}