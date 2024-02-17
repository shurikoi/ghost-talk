import styles from "./BasicSubmitButton.module.css"

export default function BasicSubmitButton({
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
