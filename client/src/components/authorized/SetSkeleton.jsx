import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"
import styles from "./SetSkeleton.module.css"

export default function SetSkeleton() {
  return (
    <div className={styles.set}>
        <div className={styles.title}><Skeleton height={25} /></div>
        <div className={styles.rectangular}><Skeleton /></div>
    </div>
  )
}
