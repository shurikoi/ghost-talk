import { useContext, useEffect, useState } from "react"
import BackBtn from "../ui/buttons/BackBtn"
import Author from "./Author"
import styles from "./ViewSet.module.css"
import { useParams } from "react-router-dom"
import { AuthorizedContext } from "../../contexts/AuthorizedContext"
import Cards from "./Cards"

export default function ViewSet() {
  
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
  const { user, title, words } = data

  return (
    <div className={styles.main}>
      <div className={styles.topWrapper}>
        <BackBtn />
        <div className={styles.titleWrapper}>
          <div className={styles.title}>{title}</div>
          {/* <div className={styles.free}>free</div> */}
        </div>
      </div>
      <Cards words={words} />
      <Author userId={"65aac7ba48a44635250d3a8a"} />
    </div>
  )
}
