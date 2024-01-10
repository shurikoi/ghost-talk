import User from "../models/User.js"
import comparePassword from "../utils/comparePassword.js"
import { registration } from "../service/userService.js"

export const checkUser = async (req, res) => {
  const user = await User.findOne({ email: req.body.email })
  const isExist = !!user

  res.json({ isExist })
  console.log(user || "User not found")
}

export const checkPassword = async (req, res) => {  
  let { email, password } = req.body
  const user = await User.findOne({
    email,
  })
  if (!user) return res.status(404).json({ error: "Invalid email" })
  const isValid = await comparePassword(password, user.password)

  res.json({ isValid })
  console.log(user)
}

export const createUser = async (req, res) => {
  let { email, name, surname, password } = req.body
  const userData = await registration(email, name, surname, password)
  res.cookie("refreshToken", userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})

  res.json(userData)
}
