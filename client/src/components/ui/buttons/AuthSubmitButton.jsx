import styles from "./AuthSubmitButton.module.css"

export default function AuthSubmitButton({
  className = "",
  onClick,
  isFilled = true,
}) {
  return (
    <button className={`${styles.submitBtn} ${!isFilled && styles.filled} ${className}`} onClick={isFilled ? onClick : undefined}>
      Submit
    </button>
  )
}
