import { useContext, useEffect, useState } from "react"
import { AuthorizedContext } from "../../contexts/AuthorizedContext"
import styles from "./NotFound.module.css"
import SetSkeleton from "./SetSkeleton"
import { Link } from "react-router-dom"
import Set from "./Set"
import { useQuery } from "react-query"

export default function NotFound() {
  const { setStore } = useContext(AuthorizedContext)

  const { data, error, isLoading } = useQuery("getAllSets", setStore.getAllSets)

  return (
    <div className={styles.wrapper}>
      <div className={styles.NotFound}>
        <div className={styles.description}>
          We didn't find anything,
          <br />
          but look what else we have
        </div>
      </div>
      <div className={styles.container}>
        {isLoading ? (
            <SetSkeleton />
          ) : (
            data.map((setData, index) => (
              <Link
                key={index}
                to={`/set/${setData.link}`}
                className={`link ${styles.link}`}
              >
                <Set key={index} setData={data[index]} />
              </Link>
            ))
          )}
      </div>
    </div>
  )
}
