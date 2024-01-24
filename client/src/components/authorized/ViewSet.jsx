import { cloneElement, useState } from "react"
import BackBtn from "../ui/buttons/BackBtn"
import Author from "./Author"
import Card from "./Card"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import styles from "./ViewSet.module.css"

export default function ViewSet() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(true)

  const backEndObject = {
    _id: "65ad03e67b5e0c8f7b45d92e",
    user: "65a9648ddc0fc1dae3789819",
    title: "32",
    words: [
      {
        word: "1",
        explanation: "Test 1",
        _id: "3874567",
      },
      {
        word: "2",
        explanation: "Test 2",
        _id: "8374201",
      },
      {
        word: "3",
        explanation: "Test 3",
        _id: "8260001",
      },
      {
        word: "4",
        explanation: "Test 4",
        _id: "8060001",
      },
    ],
    __v: 0,
  }

  const { title, words } = backEndObject
  const moveLeft = () => {
    if (index === 0) return
    setDirection(false)
    setIndex(index - 1)
}
  const moveRight = () => {
    if (index === words.length - 1) return
    setDirection(true)
    setIndex(index + 1)
  }
  return (
    <div className={styles.main}>
      <div className={styles.topWrapper}>
        <BackBtn />
        <div className={styles.titleWrapper}>
          <div className={styles.title}>Biologia - quiz przedmiot</div>
          {/* <div className={styles.free}>free</div> */}
        </div>
      </div>

      <div className={styles.cards}>
        <div className={styles.cardsWrapper}>
          <TransitionGroup>
            <CSSTransition
              key={words[index]._id}
              timeout={1000}
              classNames={direction ? {
                enter: styles.fadeEnter,
                enterActive: styles.fadeEnterActive,
                exit: styles.fadeExit,
                exitActive: styles.fadeExitActive,
              } : {
                enter: styles.fadeLeftEnter,
                enterActive: styles.fadeLeftEnterActive,
                exit: styles.fadeLeftExit,
                exitActive: styles.fadeLeftExitActive,
              }}
            >
              <Card card={words[index]} key={index} />
            </CSSTransition>
          </TransitionGroup>
        </div>
        <div className={styles.navigation}>
          <button className={styles.navButton} onClick={moveLeft}>
            prev
          </button>
          <button className={styles.navButton} onClick={moveRight}>
            next
          </button>
        </div>
      </div>

      <Author />
    </div>
  )
}
