import { Link } from "react-router-dom"
import styles from "./StartPage.module.css"
import CreateSetBtn from "../ui/buttons/CreateSetBtn"
import AllSets from "./AllSets"
import SetsSections from "./SetsSections"

export default function StartPage() {
  return (
    <div className={styles.main}>
      <Link to="/create-set" className={`link ${styles.link}`}>
        <CreateSetBtn />
      </Link>
      <SetsSections />
    </div>
  )
}
