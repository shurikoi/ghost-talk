import { Link } from "react-router-dom"
import BackBtn from "../ui/buttons/BackBtn"
import TrashIcon from "../ui/icon/TrashIcon"
import styles from "./CreateSet.module.css"

export default function CreateSet() {
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
        <div className={styles.card}>
          <div className={styles.topContainer}>
            <div className={styles.text}>1</div>
            <TrashIcon className={styles.bin} />
          </div>
          <div className={styles.bottomContainer}>
            <div className={styles.textEditor}>
              <input
                type="text"
                id="word"
                className={`${styles.editorInput} ${styles.text}`}
              />
              <label htmlFor="word" className={styles.editorLabel}>
                WORD
              </label>
            </div>
            <div className={styles.textEditor}>
              <input
                type="text"
                id="expl"
                className={`${styles.editorInput} ${styles.text}`}
              />
              <label htmlFor="expl" className={styles.editorLabel}>
                EXPLANATION
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
