import { Link } from "react-router-dom"
import BackBtn from "../ui/buttons/BackBtn"
import styles from "./CreateSet.module.css"
import { useContext, useState } from "react"
import { AuthorizedContext } from "../../contexts/AuthorizedContext"
import Card from "./Card"
import CreateBtn from "../ui/buttons/CreateBtn"

export default function CreateSet() {
  const { setStore } = useContext(AuthorizedContext)
  let [cards, setCard] = useState([<Card key="0"></Card>])
  const [title, setTitle] = useState("")

  const handleCreateCard = () =>
    setCard((prevCards) => [
      ...prevCards,
      <Card key={cards.length} number={cards.length + 1}></Card>,
    ])

  const handleSubmit = async () => {
    setStore.setTitle(title)
    await setStore.createSet()
  }

  return (
    <div className={styles.main}>
      <div className={styles.topWrapper}>
        <Link to="/" className="link">
          <BackBtn />
        </Link>
        <div className={styles.aboutWrapper}>
          <div className={styles.about}>Create a new learning set</div>
          <div className={styles.free}>free</div>
        </div>
      </div>
      <input
        type="text"
        className={`${styles.title} ${styles.text}`}
        placeholder={`Enter the title, for example "German - City"`}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className={styles.cards}>{cards.map((card, index) => card)}</div>
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
