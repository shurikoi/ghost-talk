import express from "express"
import 'express-async-errors'
import connection from "./utils/connection.js"
import cookieParser from "cookie-parser"
import router from "./router/index.js"
import cors from "cors"
import dotenv from "dotenv"
dotenv.config({ path: ".env.local" })
import { errorMiddleware } from "./middlewares/errorMiddleware.js"
import requestLogger from "./middlewares/requestLogger.js"
import unknownEndpoint from "./middlewares/unknownEndpoint.js"
import path from 'path'
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express()
const PORT = process.env.PORT

// app.use(express.static('dist'))
app.use(express.static(path.join(__dirname, '../dist')))
app.use(
  cors({
    // origin: process.env.CLIENT_URL,
    credentials: true,
  })
)
app.use(express.json())
app.use(cookieParser())
app.use(requestLogger)
app.use("/api", router)
app.use(unknownEndpoint)
app.use(errorMiddleware)

connection().then(() => {
  console.log(`Server is running on ${PORT}`)
  app.listen(PORT)
})
