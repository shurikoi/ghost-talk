import styles from "./CreateSetBtn.module.css"
import quill from "/images/quill.png"

export default function CreateSetBtn() {
    return (
        <div className={styles.createWrapper}>
          <div className={styles.leftContainer}>
            <div className={styles.createTitle}>Create set</div>
            <div className={styles.createDescription}>
              And fill it with your own materials
            </div>
          </div>
          <div className={styles.rightContainer}>
            <img src={quill} alt="quil" className={styles.icon} />
          </div>
        </div>
    )
}