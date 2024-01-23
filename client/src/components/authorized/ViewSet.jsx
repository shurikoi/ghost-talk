import BackBtn from "../ui/buttons/BackBtn"
import Author from "./Author"
import Card from "./Card"
import styles from "./ViewSet.module.css"

export default function ViewSet() {
  const backEndObject = {
    _id: "65ad03e67b5e0c8f7b45d92e",
    user: "65a9648ddc0fc1dae3789819",
    title: "32",
    words: [
      {
        word: "23",
        explanation: "Test",
        _id: "65ad03e67b5e0c8f7b45d92f",
      },
    ],
    __v: 0,
  }

  const { title, words } = backEndObject
  return (
    <div className={styles.main}>
      <div className={styles.topWrapper}>
        <BackBtn />
        <div className={styles.titleWrapper}>
          <div className={styles.title}>Biologia - quiz przedmiot</div>
          {/* <div className={styles.free}>free</div> */}
        </div>
      </div>
      {words.map((card, index) => (
        <Card card={card} key={index} />
      ))}
      <Author />
    </div>
  )
}
