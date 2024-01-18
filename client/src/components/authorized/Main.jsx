import { useContext } from "react"
import styles from "./Main.module.css"
import { Context } from "../../main"

export default function Main() {
    const { authStore } = useContext(Context)

    return (
        <main>
            <p className={styles.main}>Hello</p>
            <button onClick={() => authStore.signOut()}>Sign Out</button>
        </main>
    )
};
