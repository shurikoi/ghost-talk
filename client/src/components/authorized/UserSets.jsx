import { Link } from "react-router-dom"
import Set from "./Set"
import styles from "./UserSets.module.css"

export default function UserSets({ data, title }) {
  if (!data) return

  return (
    <div className={`${styles.flexColumn} ${styles.gap2}`}>
      <div className={title}>
        Manage your sets
      </div>
      <div className={`${styles.flexColumn} ${styles.gap1}`}>
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
    </div>
  )
}
