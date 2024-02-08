import "./App.css"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import StartPage from "./components/unauthorized/StartPage"
import Main from "./components/authorized/Main"
import { useContext, useEffect } from "react"
import { observer } from "mobx-react-lite"
import { Context } from "./contexts/Context"
import CreateSet from "./components/authorized/CreateSet"
import ViewSet from "./components/authorized/ViewSet"
import Loader from "./components/ui/Loader"
import { Toaster } from "react-hot-toast"
import NotFound from "./components/authorized/NotFound"

function App() {
  const { authStore } = useContext(Context)

  useEffect(() => {
    const checkAuth = async () => await authStore.checkAuth()
    const tokenExist = localStorage.getItem("token")
    if (tokenExist) checkAuth()
  }, [])

  if (authStore.isLoading) return <Loader></Loader>

  return (
    <>
      <Toaster
        toastOptions={{
          className: "",
          style: {
            fontFamily: "e-Ukraine",
          },
        }}
      />
      <BrowserRouter>
        <Routes>          
          {authStore.isAuth ? (
           <>
            <Route path="/" element={<Main />}></Route>
            <Route path="/create-set" element={<Main><CreateSet /></Main>}></Route>
            <Route path="/set/:link" element={<Main><ViewSet /></Main>}></Route>
            <Route path="*" element={<Main><NotFound /></Main>}></Route>
           </>
          ) : (
            <>
              <Route path="/" element={<StartPage />}></Route>
              {/* <Route path="*" element={<Navigate to="/" />} /> */}
            </>
          )}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default observer(App)
