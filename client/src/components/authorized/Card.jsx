import { useState } from "react"
import styles from "./Card.module.css"
// import { CSSTransition } from "react-transition-group"

export default function Card({ card }) {
    const [ isFlipped, setFlipped ] = useState(false)
    return (
        <div className={`${styles.card} ${isFlipped ? styles.flip : ""}`}>
            <div className={styles.front} onClick={() => setFlipped(!isFlipped)}>
                {card.word}
            </div>
            <div className={styles.back} onClick={() => setFlipped(!isFlipped)}>
                {card.explanation}
            </div>
        </div>
    )
}
