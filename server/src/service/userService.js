import ApiError from "../exceptions/ApiError.js"
import User from "../models/User.js"
import comparePassword from "../utils/comparePassword.js"
import hashPassword from "../utils/hashPassword.js"
import {
  serviceFindToken,
  serviceGenerateTokens,
  serviceRemoveToken,
  serviceSaveToken,
  serviceValidateRefreshToken,
} from "./tokenService.js"

const generateAndSaveTokens = async (user) => {
  const { email, id } = user
  let { accessToken, refreshToken } = serviceGenerateTokens({ email, id })
  await serviceSaveToken(id, refreshToken)

  return { accessToken, refreshToken, user }
}

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

  return await generateAndSaveTokens(user)
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

  return await generateAndSaveTokens(user[0])
}

export const serviceSignOut = async (refreshToken) => {
  const result = await serviceRemoveToken(refreshToken)
  return result
}

export const serviceRefresh = async (refreshToken) => {
  if (!refreshToken) throw ApiError.UnauthorizedError()

  const userData = serviceValidateRefreshToken(refreshToken)
  const tokenDb = await serviceFindToken(refreshToken)

  if (!userData || !tokenDb) throw ApiError.UnauthorizedError()

  const user = await User.findById(userData.id)

  return await generateAndSaveTokens(user)
}
