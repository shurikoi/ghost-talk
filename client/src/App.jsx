import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import AuthForm from "./components/unauthorized/AuthForm"
import DefaultForm from "./components/unauthorized/DefaultForm"
import Main from "./components/authorized/Main"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Main />}></Route> */}
        <Route path="/" element={<AuthForm />}></Route>

        <Route path="*" element={<DefaultForm />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
