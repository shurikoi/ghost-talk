import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import AuthForm from "./components/unauthorized/AuthForm"
import DefaultForm from "./components/unauthorized/DefaultForm"
import Main from "./components/authorized/Main"
import { useContext, useEffect } from "react"
import { Context } from "./main"
import { observer } from "mobx-react-lite"

function App() {
  const { authStore } = useContext(Context)

  useEffect(() => {
    if (localStorage.getItem("token")) authStore.checkAuth()
  }, [])

  return (
    <>
      {authStore.isLoading ? (
        <h1>isLoading</h1>
      ) : (
        <BrowserRouter>
          <Routes>
            {authStore.isAuth ? (
              <Route path="/" element={<Main />}></Route>
            ) : null}
            <Route path="/" element={<AuthForm />}></Route>

            <Route path="*" element={<DefaultForm />}></Route>
          </Routes>
        </BrowserRouter>
      )}
    </>
  )
}

export default observer(App)
