import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import authStore from "./stores/authStore.js"
import userStore from "./stores/userStore.js"
import { Context } from "./contexts/Context"
import { QueryClient, QueryClientProvider } from "react-query"
const queryClient = new QueryClient()

// export const Context = createContext({
//   authStore,
//   userStore,
// })

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <QueryClientProvider client={queryClient}>
    <Context.Provider value={{ authStore, userStore }}>
      <App />
    </Context.Provider>
  </QueryClientProvider>
  // </React.StrictMode>
)
