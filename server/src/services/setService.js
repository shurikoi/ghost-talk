import ApiError from "../exceptions/ApiError.js"
import Set from "../models/Set.js"

export const serviceCreateSet = async (userId, title, words) => {
  const set = await Set.insertMany([
    {
      user: userId,
      title,
      words: words,
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
