import Skeleton from "react-loading-skeleton"
import styles from "./ViewSetSkeleton.module.css"

export default function ViewSetSkeleton() {
  return (
    <div className={styles.main}>
      <div className={styles.topWrapper}>
        <Skeleton width={100} />
        <div className={styles.title}>
          <Skeleton width={400} />
        </div>
      </div>
      <Skeleton height={250} />
      <Skeleton width={90} />
    </div>
  )
}
