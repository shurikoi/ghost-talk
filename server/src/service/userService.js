import User from "../models/User.js"
import hashPassword from "../utils/hashPassword.js"
import { generateTokens, saveToken } from "./tokenService.js"

export const registration = async (email, name, surname, password) => {
  password = await hashPassword(password)

//   const candidate = await User.findOne({ email })
//   if (candidate) return { error: `User -- ${email} -- already exist` }

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
