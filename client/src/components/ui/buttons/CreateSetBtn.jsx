import styles from './CreateSetBtn.module.css'
import quill from '/images/quill.png'
import chip from '/images/chip.png'

export default function CreateSetBtn({ title, description, imageName }) {
  const images = {
    quill,
    chip,
  }

  return (
    <div className={styles.createWrapper}>
      <div className={styles.leftContainer}>
        <div className={styles.createTitle}>{title}</div>
        <div className={styles.createDescription}>{description}</div>
      </div>
      <div className={styles.rightContainer}>
        <img src={images[imageName]} alt={imageName} className={styles.icon} />
      </div>
    </div>
  )
}
