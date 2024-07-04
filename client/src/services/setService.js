import { $api, $apiBearer } from '../http'

export const serviceCreateSet = async (title, cards) => {
  return await $apiBearer.post('/create-set', { title, cards })
}

export const serviceGetSet = async (link) => {
  return await $api.post('get-set', { link })
}

export const serviceGetAllSets = async () => {
  return await $apiBearer.get('get-all-sets')
}

export const serviceDeleteSet = async (setId, setUser) => {
  return await $apiBearer.post('delete-set', { setId, setUser })
}

export const serviceCreateSetBySource = async (
  title,
  typeContent,
  source,
  partOfSpeech,
  amountOfCards
) => {
  return await $apiBearer.post('create-set-by-source', {
    title,
    typeContent,
    source,
    partOfSpeech,
    amountOfCards,
  })
}
