import { Link } from "react-router-dom"
import BackBtn from "../ui/buttons/BackBtn"
import styles from "./CreateSet.module.css"
import { useContext } from "react"
import { AuthorizedContext } from "../../contexts/AuthorizedContext"
import Card from "./Card"

export default function CreateSet() {
  const { setStore } = useContext(AuthorizedContext)
  // await setStore.createSet("FROM CLIENT", [{"word": "test", "explanation": "test"}])
  
  // const handleCreateWord = async () => setStore.createSet("FROM CLIENT", [{"word": "test", "explanation": "test"}])
  const handleClick = async () => setStore.createSet("FROM CLIENT", [{"word": "test", "explanation": "test"}])

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
        <Card/>
      </div>
      {/* <button onClick={handleCreateWord}>Add a new card</button> */}
      <button onClick={handleClick}>Hi</button>
    </div>
  )
}
