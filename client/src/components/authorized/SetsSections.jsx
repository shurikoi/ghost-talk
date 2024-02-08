import styles from "./SetsSection.module.css"
import AllSets from "./AllSets"
import UserSets from "./UserSets"
import { useContext } from "react"
import { AuthorizedContext } from "../../contexts/AuthorizedContext"
import SetSkeleton from "./SetSkeleton"
import { useQuery } from "react-query"

export default function SetsSections() {
  const { setStore } = useContext(AuthorizedContext)
  const { data, error, isLoading } = useQuery(
    "getSortedSets",
    setStore.getSortedSets
  )
  if (isLoading) return <SetSkeleton />

  return (
    <div className={styles.container}>
        <UserSets data={data[1]} title={`${styles.title} ${styles.underline} ${styles.cadetblue}`} />
        <AllSets data={data[2]} title={`${styles.title} ${styles.underline} ${styles.cornflowerblue}`} />
    </div>
  )
}
