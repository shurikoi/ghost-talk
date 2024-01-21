import styles from "./CreateBtn.module.css"

export default function CreateBtn({ onClick }) {
  return (
    <button className={styles.submitBtn} onClick={onClick}>
      Create
    </button>
  )
}
