import { Link } from "react-router-dom"
import BackBtn from "../ui/buttons/BackBtn"
import styles from "./CreateSet.module.css"
import { useContext, useState } from "react"
import { AuthorizedContext } from "../../contexts/AuthorizedContext"
import CreateBtn from "../ui/buttons/CreateBtn"
import CreateCard from "./createCard"

export default function CreateSet() {
  const { setStore } = useContext(AuthorizedContext)
  let [cards, setCard] = useState([<CreateCard key="0"></CreateCard>])
  const [title, setTitle] = useState("")

  const handleCreateCard = () =>
    setCard((prevCards) => [
      ...prevCards,
      <CreateCard key={cards.length} number={cards.length + 1}></CreateCard>,
    ])

  const handleSubmit = async () => {
    setStore.setTitle(title)
    await setStore.createSet()
  }

  return (
    <div className={styles.main}>
      <div className={styles.topWrapper}>
        <BackBtn />
        <div className={styles.titleWrapper}>
          <div className={styles.title}>Create a new learning set</div>
          <div className={styles.free}>free</div>
        </div>
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
