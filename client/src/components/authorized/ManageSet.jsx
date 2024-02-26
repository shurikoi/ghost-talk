import { useContext, useState } from "react"
import { AuthorizedContext } from "../../contexts/AuthorizedContext"
import ModalMenu from "../ui/ModalMenu"
import BasicSubmitButton from "../ui/buttons/BasicSubmitButton"
import DeleteBtn from "../ui/buttons/DeleteBtn"
import { useNavigate } from "react-router-dom"
import { FormModalContext } from "../../contexts/FormModalContext"
import styles from "./ManageSet.module.css"
import BackArrowIcon from "../ui/icon/BackArrowIcon"
import BasicInput from "../ui/BasicInput"
import toast from "react-hot-toast"

export default function ManageSet({ setTitle, setId, setUser }) {
  const { setStore } = useContext(AuthorizedContext)
  const { modalMenuStore } = useContext(FormModalContext)
  const [confirm, setConfirm] = useState("")
  const navigate = useNavigate()
  const isFilled = confirm === setTitle

  const handleSubmit = async () => {
    if (isFilled) {
      const response = await setStore.deleteSet(setId, setUser) // There is a way to delete set by spoofing the owner
      navigate("/")
      modalMenuStore.removeClass()
      toast.success("You have just deleted set")
    }
  }

  return (
    <>
      <DeleteBtn />
      <ModalMenu>
        <div className={styles.wrapper}>
          <BackArrowIcon
            onClick={() => {
              modalMenuStore.removeClass()
            }}
          />
          <div className={styles.title}>Delete set</div>
          <div
            className={styles.description}
          >{`To confirm, type "${setTitle}" in the box below`}</div>
          <BasicInput
            placeholder={"Type here"}
            value={confirm}
            setValue={setConfirm}
            isFilled={isFilled}
            handleSubmit={handleSubmit}
            colorScheme={"red"}
          />
          <BasicSubmitButton onClick={handleSubmit} isFilled={isFilled} colorScheme={"red"} />
        </div>
      </ModalMenu>
    </>
  )
}
