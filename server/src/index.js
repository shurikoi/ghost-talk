import express from "express"
import mongoose from "mongoose"
import User from "./model/User.js"
import connection from "./connection.js"
import dotenv from "dotenv"
dotenv.config()

const app = express()
const PORT = 4000

app.use(express.json())

app.post("/find", async (req, res) => {
  let user
  await User.findOne({ email: req.body.email }).then((res) => {
    user = res
  })
  res.json(user)
})

connection().then(() => {
  app.listen(PORT)
})
