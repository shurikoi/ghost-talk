import styles from './FormInput.module.css'

export default function FormInput({
  value,
  setValue,
  placeholder,
  className,
  type = 'input',
}) {
  const tagProperties = {
    className: `${styles.setTitle} ${styles.text} ${className}`,
    placeholder,
    value,
    onChange: (e) => setValue(e.target.value),
  }

  return (
    type === 'textarea' ? <textarea rows="8" {...tagProperties} /> : <input type="text" {...tagProperties} />
  )
}
