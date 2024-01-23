import styles from "./CreateCard.module.css"
import TrashIcon from "../ui/icon/TrashIcon"
import { useContext, useState } from "react"
import { AuthorizedContext } from "../../contexts/AuthorizedContext"
import { observer } from "mobx-react-lite"

function CreateCard({ number = 1 }) {
  const [word, setWord] = useState("")
  const [explanation, setExplanation] = useState("")
  const { setStore } = useContext(AuthorizedContext)

  let dto = { word, explanation }
  setStore.setCards(dto, number - 1)

  return (
    <div className={styles.card}>
      <div className={styles.topContainer}>
        <div className={styles.text}>{number}</div>
        <TrashIcon className={styles.bin} />
      </div>
      <div className={styles.bottomContainer}>
        <div className={styles.textEditor}>
          <input
            type="text"
            className={`${styles.editorInput} ${styles.text}`}
            onChange={(e) => {
              setWord(e.target.value)
            }}
            value={word}
          />
          <label className={styles.editorLabel}>WORD</label>
        </div>
        <div className={styles.textEditor}>
          <input
            type="text"
            className={`${styles.editorInput} ${styles.text}`}
            onChange={(e) => setExplanation(e.target.value)}
            value={explanation}
          />
          <label className={styles.editorLabel}>EXPLANATION</label>
        </div>
      </div>
    </div>
  )
}

export default observer(CreateCard)
