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

  console.log(words)

  return 1
}
