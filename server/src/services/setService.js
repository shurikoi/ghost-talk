import ApiError from '../exceptions/ApiError.js'
import Set from '../models/Set.js'
import { v4 as uuidv4 } from 'uuid'
import createCardsBySource from '../utils/createCardsBySource.js'

export const serviceCreateSet = async (userId, title, cards, link) => {
  if (!link) link = uuidv4()

  const set = await Set.insertMany([
    {
      user: userId,
      title,
      link,
      cards,
    },
  ])

  if (!set) throw ApiError.BadRequest('Something went wrong')

  return set
}

export const serviceGetSet = async (link) => {
  const set = await Set.findOne({
    link,
  })

  if (!set) throw ApiError.NotFound('Set does not exist')

  return set
}

export const serviceGetLimitedSets = async (skip) => {
  const sets = await Set.find({}, undefined, { skip, limit: 5 }).sort({
    createdAt: 1,
  })
  return sets
}

export const serviceGetAllSets = async () => {
  return await Set.find()
}

export const serviceDeleteSet = async (userId, setId, setUser) => {
  if (userId !== setUser) throw ApiError.UnauthorizedError()

  const set = await Set.deleteOne({
    $and: [{ _id: setId }, { user: userId }],
  })

  return set
}

export const serviceCreateSetByText = async (
  userId,
  title,
  source,
  partOfSpeech,
  amountOfCards
) => {
  const reqId = uuidv4()

  const cards = await createCardsBySource(
    '/create_cards_by_text',
    reqId,
    source,
    partOfSpeech,
    amountOfCards
  )

  return await serviceCreateSet(userId, title, cards, reqId)
}

export const serviceCreateSetByLink = async (
  userId,
  title,
  source,
  partOfSpeech,
  amountOfCards
) => {
  const reqId = uuidv4()

  const cards = await createCardsBySource(
    '/create_cards_by_link',
    reqId,
    source,
    partOfSpeech,
    amountOfCards
  )

  return await serviceCreateSet(userId, title, cards, reqId)
}
