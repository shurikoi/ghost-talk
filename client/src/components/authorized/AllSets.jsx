import { Link } from "react-router-dom"
import Set from "./Set"
import styles from "./AllSets.module.css"

export default function AllSets({ data = [], title }) {
  // TODO: Compatibility with NotFound page
  if (data.length === 0 ) return 

  return (
    <div className={`${styles.flexColumn} ${styles.gap2}`}>
      <div className={title}>Try out these learning sets</div>
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
