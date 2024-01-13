import {
  serviceCheckPassword,
  serviceCheckUser,
  serviceCreateUser,
} from "../service/userService.js"

export const checkUser = async (req, res, next) => {
  try {
    const isExist = await serviceCheckUser(req.body.email)
    res.json({ isExist })
  } catch (e) {
    next(e)
  }
}

export const checkPassword = async (req, res, next) => {
  try {
    const { email, password } = req.body
    const isValid = await serviceCheckPassword(email, password)
    res.json({ isValid })
  } catch (e) {
    next(e)
  }
}

export const createUser = async (req, res, next) => {
  try {
    const { email, name, surname, password } = req.body
    const userData = await serviceCreateUser(email, name, surname, password)
    res.cookie("refreshToken", userData.refreshToken, {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    })

    res.json(userData)
  } catch (e) {
    next(e)
  }
}
