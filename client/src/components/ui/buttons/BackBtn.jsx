import { Link } from "react-router-dom"
import ArrowIcon from "../icon/ArrowIcon"
import styles from "./BackBtn.module.css"

export default function BackBtn({ to = "/" }) {
  return (
    <Link to={to} className="link">
      <div className={styles.wrapper} role="button" tabIndex="0">
        <ArrowIcon className={styles.arrowSvg} />
        <div>Go back</div>
      </div>
    </Link>
  )
}
