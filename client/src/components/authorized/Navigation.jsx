import { Link } from "react-router-dom"
import styles from "./Navigation.module.css"
import CreateSetBtn from "../ui/buttons/CreateSetBtn"
import Set from "./Set"
import { useContext, useEffect, useState } from "react"
import { AuthorizedContext } from "../../contexts/AuthorizedContext"
import { observer } from "mobx-react-lite"

function Navigation() {
  const { setStore } = useContext(AuthorizedContext)
  const [ setsData, setSetsData ] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const responseData = await setStore.getAllSets()
      setSetsData(responseData)
    }
    fetchData()
  }, [])

  return (
    <div className={styles.main}>
      <Link to="/create-set" className={`link ${styles.link}`}>
        <CreateSetBtn />
      </Link>
      <div className={styles.setsContainer}>
        <div className={styles.heading}>Try out these learning sets</div>
        <div className={styles.container}>
          {!setsData ? <h1>FETCHING SETS</h1> : (
            setsData.map((setData, index) => (
              <Link key={index} to={`/set/${setData._id}`} className={`link ${styles.link}`}>
                <Set key={index} setData={setsData[index]} />
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default observer(Navigation)