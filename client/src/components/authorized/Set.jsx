import styles from "./Set.module.css"

export default function Set({ setData }) {
  const { title, cards } = setData
    return (
        <div className={styles.set}>
            <div className={styles.topContainer}>
              <div className={styles.title}>{title}</div>
              {/* <div className={styles.date}>1 day ago</div> */}
            </div>
            <div className={styles.bottomContainer}>
              <div className={styles.rectangular}>{`${cards.length} words`}</div>
              {/* <div className={styles.rectangular}>by Oleksandr</div> */}
            </div>
          </div>
    )
}