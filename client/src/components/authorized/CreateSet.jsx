import { useNavigate } from "react-router-dom"
import BackBtn from "../ui/buttons/BackBtn"
import CreateSetTitle from "../ui/CreateSetTitle"
import styles from "./CreateSet.module.css"
import { useContext, useState } from "react"
import { AuthorizedContext } from "../../contexts/AuthorizedContext"
import CreateBtn from "../ui/buttons/CreateBtn"
import CreateCard from "./CreateCard"
import toast from "react-hot-toast"

export default function CreateSet() {
  const { setStore } = useContext(AuthorizedContext)
  let [cards, setCard] = useState([<CreateCard key="0"></CreateCard>])
  const [title, setTitle] = useState("")
  const navigate = useNavigate()

  const handleCreateCard = () =>
    setCard((prevCards) => [
      ...prevCards,
      <CreateCard key={cards.length} number={cards.length + 1}></CreateCard>,
    ])

  const handleSubmit = async () => {
    setStore.setTitle(title)
    const response = await setStore.createSet()
    if (!response) {
      toast.error("Something went wrong :(")
      return
    }
    navigate(`/set/${response.link}`)
    toast.success("Hooray!")
  }

  return (
    <div className={styles.main}>
      <div className={styles.topWrapper}>
        <BackBtn />
        <CreateSetTitle title="Create a new learning set" />
      </div>
      <input
        type="text"
        className={`${styles.setTitle} ${styles.text}`}
        placeholder={`Enter the title, for example "German - City"`}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className={styles.cards}>{cards.map((card) => card)}</div>
      <button
        className={`${styles.newCard} ${styles.text}`}
        onClick={handleCreateCard}
      >
        Add a new card
      </button>
      <div className={styles.submitWrapper}>
        <CreateBtn onClick={handleSubmit} />
      </div>
    </div>
  )
}
