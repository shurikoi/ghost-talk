import styles from './CreateSetTitle.module.css'

export default function CreateSetTitle({ title }) {
  return (
    <div className={styles.titleWrapper}>
      <div className={styles.title}>{title}</div>
      <div className={styles.free}>public</div>
    </div>
  )
}
