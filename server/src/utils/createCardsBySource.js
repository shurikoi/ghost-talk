import { $dictionaryApi } from '../http/index.js'
import ApiError from '../exceptions/ApiError.js'

export default async function createCardsBySource(
  endpoint,
  reqId,
  source,
  partOfSpeech,
  amountOfCards
) {
    const { data } = await $dictionaryApi.post(endpoint, {
      reqId,
      source,
      partOfSpeech,
      amountOfCards,
    })

    if (!data) throw ApiError.FailedDependency('External service error')
    if (data?.cards?.length == 0 || data?.cards == undefined)
      throw ApiError.BadRequest('Not enough source details given')

    return data.cards
}
