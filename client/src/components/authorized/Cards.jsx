import styles from "./Cards.module.css"
import Card from "./Card"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import { useState } from "react"

export default function Cards({ cards }) {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(true)

  const moveLeft = () => {
    if (index === 0) return
    setDirection(false)
    setIndex(index - 1)
  }
  const moveRight = () => {
    if (index === cards.length - 1) return
    setDirection(true)
    setIndex(index + 1)
  }

  return (
    <div className={styles.cards}>
      <div className={styles.cardsWrapper}>
        <TransitionGroup>
          <CSSTransition
            key={cards[index]._id}
            timeout={1000}
            classNames={
              direction
                ? {
                    enter: styles.fadeEnter,
                    enterActive: styles.fadeEnterActive,
                    exit: styles.fadeExit,
                    exitActive: styles.fadeExitActive,
                  }
                : {
                    enter: styles.fadeLeftEnter,
                    enterActive: styles.fadeLeftEnterActive,
                    exit: styles.fadeLeftExit,
                    exitActive: styles.fadeLeftExitActive,
                  }
            }
          >
            <Card card={cards[index]} key={index} />
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
  )
}
