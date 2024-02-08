import { useContext } from "react"
import { FormModalContext } from "../../contexts/FormModalContext"
import styles from "./ModalMenu.module.css"
import { observer } from "mobx-react-lite"

function ModalMenu({ children }) {
  const { modalMenuStore } = useContext(FormModalContext)
  
  return (
    <div
      className={`${styles.main} ${
        modalMenuStore.isFormActive && styles.active
      }`}
    >
      <div
        className={styles.behind}
        onClick={() => modalMenuStore.removeClass()}
      ></div>
      <div className={styles.form}>{children}</div>
    </div>
  )
}

export default observer(ModalMenu)
