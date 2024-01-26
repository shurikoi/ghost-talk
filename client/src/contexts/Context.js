import authStore from "../stores/authStore"
import userStore from "../stores/userStore"
import { createContext } from "react"

export const Context = createContext({
  authStore,
})