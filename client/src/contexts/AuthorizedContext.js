import setStore from "../stores/setStore"
import { createContext } from "react"

export const AuthorizedContext = createContext({
    setStore,
})
