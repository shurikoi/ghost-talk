import {
  serviceCreateSet,
  serviceGetSet,
  serviceGetAllSets,
  serviceDeleteSet,
  serviceCreateSetByText,
  serviceCreateSetByLink,
  serviceGetLimitedSets,
} from '../services/setService.js'

export const createSet = async (req, res) => {
  const { title, cards } = req.body
  console.log(title, cards)
  const setData = await serviceCreateSet(req.user.id, title, cards)

  return res.json(setData)
}

export const getSet = async (req, res) => {
  const { link } = req.body
  const setData = await serviceGetSet(link)

  return res.json(setData)
}

export const getLimitedSets = async (req, res) => {
  const skip =
    req.query.skip && /^\d+$/.test(req.query.skip) ? Number(req.query.skip) : 0

  const setsData = await serviceGetLimitedSets(skip)

  return res.json(setsData)
}

export const getAllSets = async (req, res) => {
  const setsData = await serviceGetAllSets()
  return res.json(setsData)
}

export const deleteSet = async (req, res) => {
  const { id } = req.user
  const { setId, setUser } = req.body
  const setsData = await serviceDeleteSet(id, setId, setUser)
  return res.json(setsData)
}

export const createSetByText = async (req, res) => {
  const { title, source, partOfSpeech, amountOfCards } = req.body
  const { id } = req.user

  const response = await serviceCreateSetByText(
    id,
    title,
    source,
    partOfSpeech,
    amountOfCards
  )
  return res.json(response)
}

export const createSetByLink = async (req, res) => {
  const { title, source, partOfSpeech, amountOfCards } = req.body
  const { id } = req.user

  const response = await serviceCreateSetByLink(
    id,
    title,
    source,
    partOfSpeech,
    amountOfCards
  )
  return res.json(response)
}