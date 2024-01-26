import Skeleton from "react-loading-skeleton"
import styles from "./ViewSetSkeleton.module.css"

export default function ViewSetSkeleton() {
  return (
    <div className={styles.main}>
      <div className={styles.topWrapper}>
        <Skeleton width="6rem" />
        <div className={styles.title}>
          <Skeleton width="60%" />
        </div>
      </div>
      <Skeleton height={250} />
      <Skeleton width="4rem" />
    </div>
  )
}
