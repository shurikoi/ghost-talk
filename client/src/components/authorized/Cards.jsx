import styles from "./Cards.module.css"
import Card from "./Card"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import { useState } from "react"

export default function Cards({ cards }) {
  const [index, setIndex] = useState(0)

  const moveLeft = () => {
    if (index === 0) return
    setIndex(index - 1)
  }
  const moveRight = () => {
    if (index === cards.length - 1) return
    setIndex(index + 1)
  }

  return (
    <div className={styles.cards}>
      <div className={styles.cardsWrapper}>
        <TransitionGroup>
          <CSSTransition
            key={cards[index]._id}
            timeout={5000}
            classNames={{
              enter: styles.fadeEnter,
              enterActive: styles.fadeEnterActive,
              exit: styles.fadeExit,
              exitActive: styles.fadeExitActive,
            }}
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
