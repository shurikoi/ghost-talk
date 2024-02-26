import styles from "./BasicSubmitButton.module.css"

export default function BasicSubmitButton({
  className = "",
  onClick,
  isFilled = true,
  colorScheme = "default"
}) {
  const colorSchemes = {
    "default": styles.default,
    "red": styles.red,
  }
  
  return (
    <button className={`${styles.submitBtn} ${isFilled && styles[`filled-${colorScheme}`]} ${colorSchemes[colorScheme]} ${className}`} onClick={isFilled ? onClick : undefined}>
      Submit
    </button>
  )
}
