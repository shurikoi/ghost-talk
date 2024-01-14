import {
  serviceSignIn,
  serviceCheckUser,
  serviceCreateUser,
  serviceSignOut,
  serviceRefresh,
} from "../service/userService.js"

export const checkUser = async (req, res, next) => {
  try {
    const isExist = await serviceCheckUser(req.body.email)
    res.json({ isExist })
  } catch (e) {
    next(e)
  }
}

export const signIn = async (req, res, next) => {
  try {
    const { email, password } = req.body
    const userData = await serviceSignIn(email, password)

    res.cookie("refreshToken", userData.refreshToken, {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    })
    res.json(userData)
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

export const signOut = async (req, res, next) => {
  try {
    const { refreshToken } = req.cookies
    const result = await serviceSignOut(refreshToken)

    res.clearCookie("refreshToken")
    res.json(result)
  } catch (e) {
    next(e)
  }
}

export const refresh = async (req, res, next) => {
  try {
    const { refreshToken } = req.cookies
    const userData = await serviceRefresh(refreshToken)

    res.cookie("refreshToken", userData.refreshToken, {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    })
    return res.json(userData)
  } catch (e) {
    next(e)
  }
}
