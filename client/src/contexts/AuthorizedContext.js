import setStore from "../stores/setStore"
import userStore from "../stores/userStore"
import { createContext } from "react"

export const AuthorizedContext = createContext({
    setStore,
    userStore
})
