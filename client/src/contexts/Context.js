import authStore from "../stores/authStore"
import { createContext } from "react"

export const Context = createContext({
  authStore,
})