import { Link } from "react-router-dom"
import Set from "../ui/Set"
import styles from "./AllSets.module.css"

export default function AllSets({ data = [], title, titleStyles }) {
  // TODO: Compatibility with NotFound page
  if (data.length === 0 ) return 

  return (
    <div className={`${styles.flexColumn} ${styles.gap2}`}>
      <div className={titleStyles}>{title}</div>
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
