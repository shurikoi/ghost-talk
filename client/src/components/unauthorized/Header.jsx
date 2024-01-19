import HeadImage from "../../../public/images/HeadImage"
import GetStartedBtn from "../ui/buttons/GetStartedBtn"
import styles from "./Header.module.css"

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.topContainer}>
        <div className={styles.name}>Lexify</div>
        <GetStartedBtn className={styles.authTopBtn} />
      </div>
      <div className={styles.bottomContainer}>
        <div className={styles.content}>
          <GetStartedBtn className={styles.authBottomBtn} />
          <div className={styles.about}>Learning by flashcards</div>
          <HeadImage className={styles.headImage} />
        </div>
      </div>
    </div>
  )
}
