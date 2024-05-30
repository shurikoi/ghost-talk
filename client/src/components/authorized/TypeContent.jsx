import styles from "./TypeContent.module.css"

export default function TypeContent() {
    return (
        <div className={`${styles.buttonWrapper}`}>
        <label
          htmlFor="link"
          className={`${styles.text} ${styles.inputWrapper} ${styles.left}`}
        >
          <input
            type="radio"
            name="typeContent"
            id="link"
            className={`${styles.radioBtn} `}
            checked
          />
          link
        </label>
        <label
          htmlFor="text"
          className={`${styles.text} ${styles.inputWrapper} ${styles.right}`}
        >
          <input
            type="radio"
            name="typeContent"
            id="text"
            className={`${styles.radioBtn} `}
          />
          text
        </label>
      </div>
    )
}
