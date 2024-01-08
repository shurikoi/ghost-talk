import express from "express"
import User from "./model/User.js"
import connection from "./utils/connection.js"
import cors from "cors"
import dotenv from "dotenv"
import hashPassword from "./utils/hashPassword.js"
import comparePassword from "./utils/comparePassword.js"
dotenv.config({ path: ".env.local" })

const app = express()
const PORT = 4000

app.use(cors())
app.use(express.json())

app.post("/check-user", async (req, res) => {
  const user = await User.findOne({ email: req.body.email })
  const isExist = !!user

  res.json({ isExist })
  console.log(user)
})

app.post("/check-password", async (req, res) => {
  let { email, password } = req.body
  const user = await User.findOne({
    email,
  })
  if (!user) return res.status(404).json({ error: "Invalid email" })
  const isValid = await comparePassword(password, user?.password)

  res.json(isValid)
  console.log(user)
})

app.post("/create-user", async (req, res) => {
  let { email, name, surname, password } = req.body
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
