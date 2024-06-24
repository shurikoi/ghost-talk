import styles from './FormInput.module.css'

export default function FormInput({
  ref,
  placeholder,
  className,
  type = 'input',
}) {
  const tagProperties = {
    className: `${styles.setTitle} ${styles.text} ${className}`,
    placeholder,
    ref,
  }

  return (
    type === 'textarea' ? <textarea rows="8" {...tagProperties} /> : <input type="text" {...tagProperties} />
  )
}
