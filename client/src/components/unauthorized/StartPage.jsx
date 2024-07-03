import Header from "./Header"
import AuthForm from "./AuthForm"
import { FormModalContext } from "../../contexts/FormModalContext"
import modalMenuStore from "../../stores/modalMenuStore"
import Main from "./Main"

export default function StartPage() {
  return (
      <FormModalContext.Provider value={{ modalMenuStore }}>
        <div className="flex flex-col h-svh">
        <Header />
        <Main />
        <AuthForm />
        </div>
      </FormModalContext.Provider>
  )
}
