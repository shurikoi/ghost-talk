import { Link } from "react-router-dom"
import styles from "./Navigation.module.css"
import quill from "../../../public/images/quill.png"
import CreateSetBtn from "../ui/buttons/CreateSetBtn"

export default function Navigation() {

  return (
    <div className={styles.main}>
      <Link to="/create-set" className={`link ${styles.link}`}>
        <CreateSetBtn />
      </Link>
      <div className={styles.setsContainer}>
        <div className={styles.heading}>Try out these learning sets</div>
        <div className={styles.container}>
          <div className={styles.set}>
            <div className={styles.topContainer}>
              <div className={styles.title}>Miasta Polski - quick quiz</div>
              <div className={styles.date}>1 day ago</div>
            </div>
            <div className={styles.bottomContainer}>
              <div className={styles.rectangular}>5 words</div>
              <div className={styles.rectangular}>by Oleksandr</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
