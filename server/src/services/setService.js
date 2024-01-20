import ApiError from "../exceptions/ApiError.js"
import Set from "../models/Set.js"

export const serviceCreateSet = async (email, title, words) => {
  const set = await Set.insertMany([
    {
      user: email,
      title,
      words: words,
    },
  ])

  return set
}
