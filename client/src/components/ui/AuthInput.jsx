import { observer } from "mobx-react-lite"
import styles from "./AuthInput.module.css"
import { Context } from "../../contexts/Context"
import { useContext } from "react"

export default function AuthInput({
  className = "",
  placeholder,
  value,
  setValue,
  isFilled = true,
  handleSubmit,
}) {
  const handleKeyDown = (e) => {
    if (e.key == "Enter" && isFilled) handleSubmit()
  }

  return (
    <input
      className={`${styles.emailInput} ${className}`}
      type="text"
      placeholder={placeholder}
      autoCapitalize="off"
      autoComplete="false"
      value={value}
      onChange={(e) => {
        setValue(e.target.value.trim())
      }}
      onKeyDown={handleKeyDown}
    />
  )
}