import {
  serviceCreateSet,
  serviceGetSet,
  serviceGetAllSets,
  serviceDeleteSet,
  serviceCreateSetBySource,
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

export const createSetBySource = async (req, res) => {
  const { title, typeContent, source, partOfSpeech, amountOfCards } = req.body
  const { id } = req.user

  const response = await serviceCreateSetBySource(
    id,
    title,
    typeContent,
    source,
    partOfSpeech,
    amountOfCards
  )
  return res.json(response)
}
