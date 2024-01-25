import { useContext, useEffect, useState } from "react"
import styles from "./Author.module.css"
import { AuthorizedContext } from "../../contexts/AuthorizedContext"
import Skeleton from "react-loading-skeleton"

export default function Author({ userId }) {
    const [ name, setName ] = useState("")
    const { userStore } = useContext(AuthorizedContext)

    useEffect(() => {
        const fetchData = async () => {
            const responseData = await userStore.getUserById(userId)
            const { name } = responseData
            setName(name)
          }
          fetchData()
    }, [])

    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>Author</div>
            <div className={styles.user}>{name || <Skeleton />}</div>
        </div>
    )
}