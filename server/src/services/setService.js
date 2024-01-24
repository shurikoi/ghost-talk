import ApiError from "../exceptions/ApiError.js"
import Set from "../models/Set.js"

export const serviceCreateSet = async (userId, title, cards) => {
  const set = await Set.insertMany([
    {
      user: userId,
      title,
      cards,
    },
  ])

  if (!set) throw ApiError.BadRequest("Something went wrong")

  return set
}

export const serviceGetSet = async (setId) => {
  const set = await Set.findOne({
    _id: setId 
  })

  if (!set) throw ApiError.UnauthorizedError()

  return set
}

export const serviceGetAllSets = async () => {
  return await Set.find()
}