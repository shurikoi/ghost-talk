import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import StartPage from "./components/unauthorized/StartPage"
import Main from "./components/authorized/Main"
import { useContext, useEffect, useMemo } from "react"
import { observer } from "mobx-react-lite"
import { Context } from "./contexts/Context"

function App() {
  const { authStore } = useContext(Context)

  useEffect(() => {
    const checkAuth = async () => await authStore.checkAuth()
    const tokenExist = localStorage.getItem("token")
    if (tokenExist) checkAuth()
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
            ) : <Route path="/" element={<StartPage />}></Route>}
            
            {/* <Route path="*" element={}></Route> */}
          </Routes>
        </BrowserRouter>
      )}
    </>
  )
}

export default observer(App)
