import { serviceCreateSet, serviceGetSet, serviceGetAllSets, serviceDeleteSet, serviceCreateSetByLink } from "../services/setService.js"

export const createSet = async (req, res, next) => {
  try {
    const { title, cards } = req.body
    console.log(title, cards)
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
    const { setId, setUser } = req.body
    const setsData = await serviceDeleteSet(id, setId, setUser)
    return res.json(setsData)
  } catch (e) {
    next(e)
  }
}

export const createSetByLink = async (req, res, next) => {
  try {
    // const { title } = req.body
    // const { id } = req.user

    // Imitating a real body request
    const [ id, title, resource, partOfSpeech ] = [1, "Smth", "https://en.wikipedia.org/wiki/API", "verb"]
    const response = await serviceCreateSetByLink(id, title, resource, partOfSpeech)
    return res.json(response)
  } catch (e) {
    next(e)
  }
}