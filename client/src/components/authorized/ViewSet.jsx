import { useContext } from "react"
import BackBtn from "../ui/buttons/BackBtn"
import Author from "./Author"
import styles from "./ViewSet.module.css"
import { useParams } from "react-router-dom"
import { AuthorizedContext } from "../../contexts/AuthorizedContext"
import Cards from "./Cards"
import ViewSetSkeleton from "./ViewSetSkeleton"
import NotFound from "./NotFound"
import { useQuery } from "react-query"
import ManageSet from "./ManageSet"

export default function ViewSet() {
  const { link } = useParams()
  const { setStore, userStore } = useContext(AuthorizedContext)
  const { data, error, isLoading } = useQuery(["getSet", link], () =>
    setStore.getSet(link)
  )

  if (isLoading) return <ViewSetSkeleton />
  if (error) return <NotFound /> // TODO: Find better way to handle 404 just from App component !
  console.log(data)

  return (
    <div className={styles.main}>
      <div className={styles.topWrapper}>
        <BackBtn />
        <div className={styles.titleWrapper}>
          <div className={styles.title}>{data.title}</div>
          {/* <div className={styles.free}>free</div> */}
        </div>
      </div>
      <Cards cards={data.cards} />
      <div className={styles.setInfo}>
        <Author userId={data.user} />
        {data.user === userStore.user._id && <ManageSet setTitle={data.title} setId={data._id} setUser={data.user} />}
      </div>
    </div>
  )
}
