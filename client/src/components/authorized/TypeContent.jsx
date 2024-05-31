import { useRef, useState } from 'react'
import styles from './TypeContent.module.css'
import FormInput from '../ui/FormInput'
import link from '/images/link.png'
import text from '/images/text.png'

export default function TypeContent() {
  const [typeOfContent, setTypeOfContent] = useState('link')
  const source = useRef('')

  const handleOptionChange = (element) => {
    console.log(element.target.value)
    setTypeOfContent(element.target.value)
  }

  return (
    <div className={styles.sourceContainer}>
      <div className={`${styles.buttonWrapper}`}>
        <label
          htmlFor="link"
          className={`${styles.text} ${styles.inputWrapper}`}
        >
          <input
            type="radio"
            name="typeContent"
            id="link"
            value="link"
            className={`${styles.radioBtn} `}
            onChange={handleOptionChange}
            checked={typeOfContent === 'link'}
          />
          <img src={link} alt="link" />
        </label>
        <label
          htmlFor="text"
          className={`${styles.text} ${styles.inputWrapper}`}
        >
          <input
            type="radio"
            name="typeContent"
            id="text"
            value="text"
            className={`${styles.radioBtn} `}
            onChange={handleOptionChange}
            checked={typeOfContent === 'text'}
          />
          <img src={text} alt="text" />
        </label>
      </div>
      <div className={styles.formInputWrapper}>
      <FormInput
          ref={source}
          placeholder={'Place your link here'}
          className={styles.formInput}
          type={typeOfContent === "text" && "textarea"}
        />
      </div>
    </div>
  )
}
