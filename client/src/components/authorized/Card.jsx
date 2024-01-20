import styles from "./Card.module.css"
import TrashIcon from "../ui/icon/TrashIcon"

export default function Card() {
    return (
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
    )
}