import { useContext } from "react"
import styles from "./GetStartedBtn.module.css"
import { FormModalContext } from "../../../contexts/FormModalContext"

export default function GetStartedBtn() {
    let { authFormStore } = useContext(FormModalContext)
    const handleClick = () => {
        authFormStore.setFormActive(true)
    }
    return (
        <button className={styles.getStarted} onClick={handleClick}>Get Started</button>
    )
}