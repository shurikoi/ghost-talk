import { serviceCreateSet } from "../services/setService.js"

export const createSet = async (req, res, next) => {
  try {
    const { title, words } = req.body
    const setData = await serviceCreateSet(req.user.id, title, words)

    return res.json(setData)
  } catch (e) {
    next(e)
  }
}
