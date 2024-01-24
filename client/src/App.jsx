import "./App.css"
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom"
import StartPage from "./components/unauthorized/StartPage"
import Main from "./components/authorized/Main"
import { useContext, useEffect } from "react"
import { observer } from "mobx-react-lite"
import { Context } from "./contexts/Context"
// import Navigation from "./components/authorized/Navigation"
import CreateSet from "./components/authorized/CreateSet"
import ViewSet from "./components/authorized/ViewSet"

function App() {
  const { authStore } = useContext(Context)

  useEffect(() => {
    const checkAuth = async () => await authStore.checkAuth()
    const tokenExist = localStorage.getItem("token")
    if (tokenExist) checkAuth()
  }, [])

  const authorizedPages = [
    ["/"],
    ["/create-set", <CreateSet></CreateSet>],
    ["/set/:link", <ViewSet></ViewSet>]
  ]

  return (
    <>
      {authStore.isLoading ? (
        <h1>isLoading</h1>
      ) : (
        <BrowserRouter>
          <Routes>
            {authStore.isAuth ? (
              authorizedPages.map((page, index) => (
                <Route path={page[0]} element={<Main>{page[1]}</Main>} key={index}></Route>
              ))
            ) : <Route path="/" element={<StartPage />}></Route>}
            
            {/* <Route path="*" element={}></Route> */}
          </Routes>
        </BrowserRouter>
      )}
    </>
  )
}

export default observer(App)
