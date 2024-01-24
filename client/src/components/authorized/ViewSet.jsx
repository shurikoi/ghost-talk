import { useContext, useEffect, useState } from "react"
import BackBtn from "../ui/buttons/BackBtn"
import Author from "./Author"
import Card from "./Card"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import styles from "./ViewSet.module.css"
import { useParams } from "react-router-dom"
import { AuthorizedContext } from "../../contexts/AuthorizedContext"

export default function ViewSet() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(true)
  const { link } = useParams()
  const { setStore } = useContext(AuthorizedContext)
  const [ data, setData ] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const responseData = await setStore.getSet(link)
      setData(responseData)
    }
    fetchData()
  }, [])
  
  if (!data) return <h1>FETCHING</h1>
  const { title, words } = data

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
          <div className={styles.title}>{title}</div>
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
