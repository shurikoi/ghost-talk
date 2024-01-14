import express from "express"
import connection from "./utils/connection.js"
import cookieParser from 'cookie-parser'
import router from "./router/index.js"
import cors from "cors"
import dotenv from "dotenv"
dotenv.config({ path: ".env.local" })
import { errorMiddleware } from "./middlewares/errorMiddleware.js"

const app = express()
const PORT = 4000

app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use('/api', router)
app.use(errorMiddleware)

connection().then(() => {
  app.listen(PORT)
})