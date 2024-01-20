import ArrowIcon from "../icon/ArrowIcon";
import styles from "./BackBtn.module.css"

export default function BackBtn() {
    return (
        <div className={styles.wrapper} role="button" tabIndex="0">
            <ArrowIcon className={styles.arrowSvg} />
            <div>Go back</div>
        </div>
    )
}