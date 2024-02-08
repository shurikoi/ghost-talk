import modalMenuStore from "../stores/modalMenuStore"
import { createContext } from "react"

export const FormModalContext = createContext({
  modalMenuStore,
})
