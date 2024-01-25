import styles from "./Loader.module.css"
import BarLoader from "react-spinners/BarLoader"

export default function Loader() {
  return (
    <div className={styles.loaderWrapper}>
        <BarLoader
          color="white"
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
    </div>
  )
}
