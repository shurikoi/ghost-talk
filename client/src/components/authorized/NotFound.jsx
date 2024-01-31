import styles from "./NotFound.module.css"
import AllSets from "./AllSets"

export default function NotFound() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.NotFound}>
        <div className={styles.description}>
          We didn't find anything,
          <br />
          but look what else we have
        </div>
      </div>
      <AllSets />
    </div>
  )
}
