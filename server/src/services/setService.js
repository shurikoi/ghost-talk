import ApiError from "../exceptions/ApiError.js"
import Set from "../models/Set.js"
import { v4 as uuidv4 } from "uuid"
import axios from "axios"

export const serviceCreateSet = async (userId, title, cards) => {
  const link = uuidv4()
  const set = await Set.insertMany([
    {
      user: userId,
      title,
      link,
      cards,
    },
  ])

  if (!set) throw ApiError.BadRequest("Something went wrong")

  return set
}

export const serviceGetSet = async (link) => {
  const set = await Set.findOne({
    link,
  })

  if (!set) throw ApiError.NotFound("Set does not exist")

  return set
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

export const serviceCreateSetByLink = async (
  id,
  title = "",
  resource,
  partOfSpeech,
  amountOfCards
) => {
  // To send ID request to Python endpoint
  // TODO: In order not to generate twice, it makes sense to transfer this string to serviceCreateSet ?
  // const reqId = uuidv4()

  const { data } = await axios.post(
    "http://127.0.0.1:8000/create_cards",
    {
      id,
      resource,
      partOfSpeech,
      amountOfCards,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
  if (!data) throw ApiError.FailedDependency("External service error")

  return await serviceCreateSet(id, title, data)
}
