import { Link } from "react-router-dom"
import BackBtn from "../ui/buttons/BackBtn"
import styles from "./CreateSet.module.css"
import { useContext, useState } from "react"
import { AuthorizedContext } from "../../contexts/AuthorizedContext"
import Card from "./Card"

export default function CreateSet() {
  const { setStore } = useContext(AuthorizedContext)
  let [ cards, setCard ] = useState([<Card key="0" number={1}></Card>])

  // await setStore.createSet("FROM CLIENT", [{"word": "test", "explanation": "test"}])
  const handleCreateCard = () => setCard([...cards, <Card key={cards.length} number={cards.length + 1}></Card>])
  const handleClick = async () => await setStore.createSet("FROM CLIENT", [{"word": "test", "explanation": "test"}])

  return (
    <div className={styles.main}>
      <div className={styles.topWrapper}>
        <Link to="/" className="link"><BackBtn /></Link>
        <div className={styles.aboutWrapper}>
          <div className={styles.about}>Create a new learning set</div>
          <div className={styles.free}>free</div>
        </div>
      </div>
      <input
        type="text"
        className={`${styles.title} ${styles.text}`}
        placeholder={`Enter the title, for example "German - City"`}
      />
      <div className={styles.cards}>
        {cards.map((card) => card)}
      </div>
      <button className={styles.newCard} onClick={handleCreateCard}>Add a new card</button>
      <button onClick={handleClick}>Hi</button>
    </div>
  )
}
