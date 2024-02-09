import { useContext, useState } from "react"
import { AuthorizedContext } from "../../contexts/AuthorizedContext"
import ModalMenu from "../ui/ModalMenu"
import AuthSubmitButton from "../ui/buttons/AuthSubmitButton"
import DeleteBtn from "../ui/buttons/DeleteBtn"
import { useNavigate } from "react-router-dom"
import { FormModalContext } from "../../contexts/FormModalContext"
import styles from "./ManageSet.module.css"
import AuthBackArrowIcon from "../ui/icon/AuthBackArrowIcon"
import AuthInput from "../ui/AuthInput"

export default function ManageSet({ setTitle, setId, setUser }) {
  const { setStore } = useContext(AuthorizedContext)
  const { modalMenuStore } = useContext(FormModalContext)
  const [confirm, setConfirm] = useState("")
  const navigate = useNavigate()
  const isFilled = confirm === setTitle

  const handleSubmit = async () => {
    if (isFilled) {
      await setStore.deleteSet(setId, setUser) // There is a way to delete set by spoofing the owner
      navigate("/")
      modalMenuStore.removeClass()
    }
  }

  return (
    <>
      <DeleteBtn />
      <ModalMenu>
        <div className={styles.wrapper}>
          <AuthBackArrowIcon
            onClick={() => {
              modalMenuStore.removeClass()
            }}
          />
          <div className={styles.title}>Delete set</div>
          <div
            className={styles.description}
          >{`To confirm, type "${setTitle}" in the box below`}</div>
          <AuthInput
            placeholder={"Type here"}
            value={confirm}
            setValue={setConfirm}
            isFilled={isFilled}
            handleSubmit={handleSubmit}
          />
          <AuthSubmitButton onClick={handleSubmit} isFilled={isFilled} />
        </div>
      </ModalMenu>
    </>
  )
}
