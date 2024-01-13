import ApiError from "../exceptions/apiError.js"
import User from "../models/User.js"
import comparePassword from "../utils/comparePassword.js"
import hashPassword from "../utils/hashPassword.js"
import { generateTokens, saveToken } from "./tokenService.js"

export const serviceCheckUser = async (email) => {
  const user = await User.findOne({ email })
  return !!user
}

export const serviceSignIn = async (email, password) => {
  const user = await User.findOne({
    email,
  })

  if (!user) throw ApiError.BadRequest("Non-existent email address")

  const isPasswordValid = await comparePassword(password, user.password)
  if (!isPasswordValid) throw ApiError.BadRequest("Incorrect password")

  const { id } = user
  const { accessToken, refreshToken } = generateTokens({ email, id })
  await saveToken(id, refreshToken)
  
  return { accessToken, refreshToken, user }
}

export const serviceCreateUser = async (email, name, surname, password) => {
  password = await hashPassword(password)

  const isUserExist = await User.findOne({ email })
  if (isUserExist) throw ApiError.BadRequest(`${email} already exists`)

  const user = await User.insertMany([
    {
      email,
      name,
      surname,
      password,
    },
  ])

  const { id } = user[0]
  const { accessToken, refreshToken } = generateTokens({ email, id })
  await saveToken(id, refreshToken)
  
  return { accessToken, refreshToken, user }
}
