import express from "express"
import 'express-async-errors'
import connection from "./utils/connection.js"
import cookieParser from "cookie-parser"
import router from "./router/index.js"
import cors from "cors"
import dotenv from "dotenv"
dotenv.config({ path: ".env.local" })
import { errorMiddleware } from "./middlewares/errorMiddleware.js"

const app = express()
const PORT = 4000

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
)
app.use(express.json())
app.use(cookieParser())
app.use("/api", router)
app.use(errorMiddleware)

connection().then(() => {
  console.log(`Server is running on ${PORT}`)
  app.listen(PORT)
})
