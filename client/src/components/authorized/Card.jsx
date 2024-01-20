import styles from "./Card.module.css"
import TrashIcon from "../ui/icon/TrashIcon"

export default function Card({number = 1}) {
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
              />
              <label className={styles.editorLabel}>
                WORD
              </label>
            </div>
            <div className={styles.textEditor}>
              <input
                type="text"
                className={`${styles.editorInput} ${styles.text}`}
              />
              <label className={styles.editorLabel}>
                EXPLANATION
              </label>
            </div>
          </div>
        </div>
    )
}