import { serviceCreateSet, serviceGetSet } from "../services/setService.js"

export const createSet = async (req, res, next) => {
  try {
    const { title, words } = req.body
    const setData = await serviceCreateSet(req.user.id, title, words)

    return res.json(setData)
  } catch (e) {
    next(e)
  }
}

export const getSet = async (req, res, next) => {
  try {
    const { setId } = req.body
    const setData = await serviceGetSet(setId, req.user.id)

    return res.json(setData)
  } catch (e) {
    next(e)
  }
}