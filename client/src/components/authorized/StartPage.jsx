import { Link } from "react-router-dom"
import styles from "./StartPage.module.css"
import CreateSetBtn from "../ui/buttons/CreateSetBtn"
import AllSets from "./AllSets"

export default function StartPage() {
  return (
    <div className={styles.main}>
      <Link to="/create-set" className={`link ${styles.link}`}>
        <CreateSetBtn />
      </Link>
      <div className={styles.setsContainer}>
        <div className={styles.heading}>Try out these learning sets</div>
        <AllSets />
      </div>
    </div>
  )
}
