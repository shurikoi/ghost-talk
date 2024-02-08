import { useContext } from "react"
import TrashIcon from "../icon/TrashIcon"
import styles from "./DeleteBtn.module.css"
import { FormModalContext } from "../../../contexts/FormModalContext"

export default function DeleteBtn() {
    const { modalMenuStore } = useContext(FormModalContext)
    
    return (
        <button className={styles.deleteBtn} onClick={() => modalMenuStore.addClass()}>
            <TrashIcon className={styles.icon} />
            <div className={styles.title}>Delete</div>
        </button>
    )
}