import {
  serviceCreateSet,
  serviceGetSet,
  serviceGetAllSets,
  serviceDeleteSet,
  serviceCreateSetByLink,
} from "../services/setService.js"

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
    const [userId, title, typeContent, resource, partOfSpeech, amountOfCards] = [
      "65bf85c90c70f8aea692495c",
      "Smth",
      "text",
      ["card", "map", "notebook"],
      "nouns",
      10,
    ]
    const response = await serviceCreateSetByLink(
      userId,
      title,
      typeContent,
      resource,
      partOfSpeech,
      amountOfCards
    )
    return res.json(response)
  } catch (e) {
    next(e)
  }
}
