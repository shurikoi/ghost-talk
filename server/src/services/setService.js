import ApiError from "../exceptions/ApiError.js"
import Set from "../models/Set.js"
import { v4 as uuidv4 } from "uuid"

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

  if (!set) throw ApiError.UnauthorizedError()

  return set
}

export const serviceGetAllSets = async () => {
  return await Set.find()
}