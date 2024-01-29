import { serviceCreateSet, serviceGetSet, serviceGetAllSets, serviceDeleteSet } from "../services/setService.js"

export const createSet = async (req, res, next) => {
  try {
    const { title, cards } = req.body
    const setData = await serviceCreateSet(req.user.id, title, cards)

    return res.json(setData)
  } catch (e) {
    next(e)
  }
}

export const getSet = async (req, res, next) => {
  try {
    const { link } = req.body
    const setData = await serviceGetSet(link)

    return res.json(setData)
  } catch (e) {
    next(e)
  }
}

export const getAllSets = async (req, res, next) => {
  try {
    const setsData = await serviceGetAllSets()
    return res.json(setsData)
  } catch (e) {
    next(e)
  }
}

export const deleteSet = async (req, res, next) => {
  try {
    const { id } = req.user
    const { setId } = req.body
    const setsData = await serviceDeleteSet(id, setId)
    return res.json(setsData)
  } catch (e) {
    next(e)
  }
}