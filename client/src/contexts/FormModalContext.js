import authFormStore from "../stores/authFormStore"
import { createContext } from "react"

export const FormModalContext = createContext({
  authFormStore,
})
