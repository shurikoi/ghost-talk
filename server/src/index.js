import express from "express"
import User from "./model/User.js"
import connection from "./utils/connection.js"
import cors from "cors"
import dotenv from "dotenv"
import hashPassword from "./utils/hashPassword.js"
dotenv.config({ path: ".env.local" })

const app = express()
const PORT = 4000

app.use(cors())
app.use(express.json())

app.post("/check-user", async (req, res) => {
  const user = await User.findOne({ email: req.body.email })
  const isExist = !!user

  //   if (!user) return res.status(404).json({ error: "User not found" })
  res.json({ isExist })
  console.log(user)
})

app.post("/check-password", async (req, res) => {
  let {email, password} = req.body
  password = await hashPassword(password)
  const user = await User.findOne({
    email,
    password,
  })
  const isValid = !!user

  res.json(isValid)
  console.log(user)
})

app.post("/create-user", async (req, res) => {
  let {email, name, surname, password} = req.body
  password = await hashPassword(password)
  const user = await User.insertMany([
    {
      email,
      name,
      surname,
      password,
    },
  ])
  const isCreated = !!user

  res.json(isCreated)
  console.log(user)
})

connection().then(() => {
  app.listen(PORT)
})
