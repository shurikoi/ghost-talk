import styles from "./Cards.module.css"
import Card from "./Card"
import { TransitionGroup, CSSTransition, SwitchTransition } from "react-transition-group"
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
  // console.log(cards[index])

  return (
    <div className={styles.cards}>
      <div className={styles.cardsWrapper}>
        <SwitchTransition mode={"out-in"}>
          <CSSTransition
            key={index}
            timeout={200}
            classNames={{
              enter: styles.fadeEnter,
              enterActive: styles.fadeEnterActive,
              exit: styles.fadeExit,
              exitActive: styles.fadeExitActive,
            }}
          >
            <Card card={cards[index]} key={index} />
          </CSSTransition>
        </SwitchTransition>
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
