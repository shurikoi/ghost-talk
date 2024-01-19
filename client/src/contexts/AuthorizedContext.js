import navigatorStore from "../stores/navigatorStore"
import { createContext } from "react"

export const AuthorizedContext = createContext({
    navigatorStore,
})
