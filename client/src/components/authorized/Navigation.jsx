import { Link } from "react-router-dom"
import styles from "./Navigation.module.css"

export default function Navigation() {
  const items = ["CREATE SET"]
  const setOfItems = {
    "CREATE SET": {
      path: "create-set",
    },
  }

  return (
    <div className={styles.main}>
      <div className={styles.options}>
        {items.map((item, index) => (
          <Link to={setOfItems[item].path} className="link" key={index}>
            <div className={styles.option}>
              {item}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
