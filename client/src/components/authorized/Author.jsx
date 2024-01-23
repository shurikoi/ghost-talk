import styles from "./Author.module.css"

export default function Author() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>Author</div>
            <div className={styles.user}>NAME</div>
        </div>
    )
}