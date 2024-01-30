import { useContext, useEffect, useState } from "react"
import BackBtn from "../ui/buttons/BackBtn"
import Author from "./Author"
import styles from "./ViewSet.module.css"
import { useParams } from "react-router-dom"
import { AuthorizedContext } from "../../contexts/AuthorizedContext"
import Cards from "./Cards"
import ViewSetSkeleton from "./ViewSetSkeleton"
import { observer } from "mobx-react-lite"
import NotFound from "./NotFound"

function ViewSet() {
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
  
  if (setStore.isLoading && !data) return <ViewSetSkeleton />
  if (!data) return <NotFound /> // TODO: Only when 404!!
  const { user, title, cards } = data

  return (
    <div className={styles.main}>
      <div className={styles.topWrapper}>
        <BackBtn />
        <div className={styles.titleWrapper}>
          <div className={styles.title}>{title}</div>
          {/* <div className={styles.free}>free</div> */}
        </div>
      </div>
      <Cards cards={cards} />
      <Author userId={user} />
    </div>
  )
}

export default observer(ViewSet)