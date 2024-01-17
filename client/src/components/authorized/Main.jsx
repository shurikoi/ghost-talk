import { useContext } from "react"
import "./Main.css"
import { Context } from "../../main"

export default function Main() {
    const { authStore } = useContext(Context)

    return (
        <div className="main">
            <p className="">Hello</p>
            <button onClick={() => authStore.signOut()}>Sign Out</button>
        </div>
    )
};
