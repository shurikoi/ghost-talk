import { serviceCreateSet } from "../services/setService.js"

export const createSet = async (req, res, next) => {
  try {
    const { email, title, words } = req.body
    const setData = await serviceCreateSet(email, title, words)

    return res.json(setData)
  } catch (e) {
    next(e)
  }
}
