import { useContext } from "react"
import styles from "./Author.module.css"
import { AuthorizedContext } from "../../contexts/AuthorizedContext"
import Skeleton from "react-loading-skeleton"
import { useQuery } from "react-query"

export default function Author({ userId }) {
  const { userStore } = useContext(AuthorizedContext)
  const { data } = useQuery(["getUserById", userId], () =>
    userStore.getUserById(userId)
  )

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Author</div>
      <div className={styles.user}>{data?.name || <Skeleton />}</div>
    </div>
  )
}