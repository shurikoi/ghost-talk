import { useContext } from "react"
import { AuthorizedContext } from "../../contexts/AuthorizedContext"
import { useQuery } from "react-query"
import SetSkeleton from "./SetSkeleton"
import { Link } from "react-router-dom"
import Set from "./Set"
import styles from "./AllSets.module.css"

export default function AllSets() {
  const { setStore } = useContext(AuthorizedContext)
  const { data, error, isLoading } = useQuery("getAllSets", setStore.getAllSets)

  return isLoading ? (
    <SetSkeleton />
  ) : (
    <div className={styles.container}>
      {data.map((setData, index) => (
        <Link
          key={index}
          to={`/set/${setData.link}`}
          className={`link ${styles.link}`}
        >
          <Set key={index} setData={data[index]} />
        </Link>
      ))}
    </div>
  )
}
