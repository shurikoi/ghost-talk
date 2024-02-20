import ApiError from "../exceptions/ApiError.js"
import Set from "../models/Set.js"
import { v4 as uuidv4 } from "uuid"
import fetch from "node-fetch"

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
    $and: [
      {_id: setId},
      {user: userId}
    ]
  })

  return set
}

// Maybe I will rewrite it all
export const serviceCreateSetByLink = async (userId, title) => {
  // To send ID request to Python endpoint 
  // TODO: In order not to generate twice, it makes sense to transfer this string to serviceCreateSet ?
  const reqId = uuidv4()
  
  // await serviceCreateSet(userId, title, data)

  const pyResponse = await fetch("", {
    method: "post",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      reqId,
      resource,
      partOfSpeech
    })
  })
  
  const cards = await pyResponse.json()
  console.log(cards)
}